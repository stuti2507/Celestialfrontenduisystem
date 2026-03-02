import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'csv-parse/sync';

function readCsv(fileName: string) {
  const source = fs.readFileSync(path.join(process.cwd(), 'src', 'data', fileName), 'utf-8');
  return parse(source, { columns: true, skip_empty_lines: true });
}

export function getWhyNowData() {
  return {
    aged60: readCsv('global-aged-60.csv'),
    lifeExpectancy: readCsv('global-life-expectancy.csv'),
    deathsByCause: readCsv('global-deaths-by-cause.csv'),
  };
}
