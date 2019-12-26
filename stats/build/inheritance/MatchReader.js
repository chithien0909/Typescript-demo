"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const utils_1 = require("./utils");
class MatchReader extends CSVFileReader_1.CsvFileReader {
    mapRow(row) {
        return [
            utils_1.dateStringtoDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6]
        ];
    }
}
exports.MatchReader = MatchReader;
