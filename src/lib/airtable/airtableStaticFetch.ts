import Airtable from 'airtable';
import fs from 'fs';
import fetch from 'node-fetch';
import path from 'path';

const API_KEY: string = process.env.AIRTABLE_API_KEY || '';
const BASE_ID: string = process.env.AIRTABLE_BASE_ID || '';
Airtable.configure({ apiKey: API_KEY });

interface Attachment {
  id: string;
  url: string;
  filename: string;
}

const isAttachmentField = (field: any): field is Attachment[] => {
  return Array.isArray(field) && field.length > 0 && typeof field[0] === 'object' && 'url' in field[0];
};

export const fetchStaticRecordsWithAttachments = async (tableName: string, attachmentsDir: string): Promise<any[]> => {
  const base = Airtable.base(BASE_ID);
  let records: any[] = [];

  await base(tableName)
    .select({})
    .eachPage(async (pageRecords, fetchNextPage) => {
      for (const record of pageRecords) {
        let formattedRecord = { ...record.fields };

        for (let fieldName in formattedRecord) {
          let field = formattedRecord[fieldName];
          if (isAttachmentField(field)) {
            const downloadedAttachments = await Promise.all(field.map(async (attachment: any) => {
              await downloadAttachments([attachment], attachmentsDir);
              const relativePath = path.join('images', tableName, attachment.filename);
              return {
                ...attachment,
                localPath: "/" + relativePath
              };
            }));
            formattedRecord[fieldName] = downloadedAttachments;
          }
        }

        records.push(formattedRecord);
      }
      await fetchNextPage();
    });

  return records;
};


export const downloadAttachments = async (attachments: Attachment[], dir: string): Promise<void> => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  await Promise.all(attachments.map(async (attachment) => {
    const response = await fetch(attachment.url);
    if (!response.ok) {
      throw new Error(`Failed to download attachment: ${attachment.url}`);
    }
    const buffer = await response.buffer();
    fs.writeFileSync(path.join(dir, attachment.filename), buffer);
  }));
};

export const saveRecordsToJson = (records: any[], jsonFilePath: string): void => {
  const dir = path.dirname(jsonFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(jsonFilePath, JSON.stringify(records, null, 2), 'utf8');
};


export async function saveTable(tableName: string, dataDir: string, imageDirBase: string) {
  const attachmentsDir = path.join(imageDirBase, tableName);
  const jsonFilePath = path.join(dataDir, `${tableName}.json`);

  // Fetch records with attachments
  const records = await fetchStaticRecordsWithAttachments(tableName, attachmentsDir);

  // Save the records to a JSON file
  saveRecordsToJson(records, jsonFilePath);
}