import fs from 'fs';
import { dateStringtoDate } from './utils';
import { MatchResult } from './MatchResult';
type MathData = [Date, string, string, number, number, MatchResult, string];
export class CsvFileReader {
  data: MathData[] = [];
  constructor(public filename: string) {}
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(
        (row: string[]): MathData => {
          return [
            dateStringtoDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]
          ];
        }
      );
  }
}
