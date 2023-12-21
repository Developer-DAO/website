import Airtable from 'airtable';
import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';

// Configure Airtable
const API_KEY: string = process.env.AIRTABLE_API_KEY || '';
const BASE_ID: string = process.env.AIRTABLE_BASE_ID || '';
Airtable.configure({ apiKey: API_KEY });

// Define interfaces
interface BaseRecord {
  id: string;
  fields: { [key: string]: any };
}

interface Attachment {
  id: string;
  url: string;
  filename: string;
}

// Check if a field is an array of attachments
const isAttachmentField = (field: any): field is Attachment[] => {
  return Array.isArray(field) && field.length > 0 && 'url' in field[0];
};

// Function to fetch all records and their attachments
export const fetchRecordsWithAttachments = async (tableName: string, attachmentsDir: string): Promise<BaseRecord[]> => {
  const base = Airtable.base(BASE_ID);
  const records: BaseRecord[] = [];
  await base(tableName)
    .select({})
    .eachPage(async (pageRecords, fetchNextPage) => {
      for (const record of pageRecords) {
        for (const fieldName in record.fields) {
          const field = record.fields[fieldName];
          if (isAttachmentField(field)) {
            await downloadAttachments(field, attachmentsDir);
            // Replace the original attachment array with the local paths
            record.fields[fieldName] = field.map(a => ({
              ...a,
              localPath: path.join(attachmentsDir, a.filename)
            }));
          }
        }
      }
      records.push(...pageRecords);
      fetchNextPage();
    });

  return records;
};

// Function to download attachments
export const downloadAttachments = async (attachments: Attachment[], dir: string): Promise<void> => {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
  }

  // Download each attachment
  for (const attachment of attachments) {
    const response = await fetch(attachment.url);
    const buffer = await response.buffer();
    fs.writeFileSync(path.join(dir, attachment.filename), buffer);
  }
};

// Save records to JSON file
export const saveRecordsToJson = (records: BaseRecord[], jsonFilePath: string): void => {
  fs.writeFileSync(jsonFilePath, JSON.stringify(records, null, 2), 'utf8');
};
