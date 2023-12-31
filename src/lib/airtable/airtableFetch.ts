import Airtable from "airtable";

const API_KEY: string = process.env.AIRTABLE_API_KEY || "";
const BASE_ID: string = process.env.AIRTABLE_BASE_ID || "";

Airtable.configure({
  apiKey: API_KEY,
});

const base = Airtable.base(BASE_ID);

interface Record {
  [key: string]: any;
}

export const fetchFromAirtable = async ({
  tableName,
}: {
  tableName: string;
}): Promise<Record[]> => {
  return new Promise((resolve, reject) => {
    base(tableName)
      .select({})
      // TODO: types
      .firstPage((err, records: any) => {
        if (err) return reject(err);
        resolve(records.map((record: any) => record.fields));
      });
  });
};
