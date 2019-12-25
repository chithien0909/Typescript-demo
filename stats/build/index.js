"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const CSVFileReader_1 = require("./CSVFileReader");
//Create an object tha satisfies the DataReader interface
const csvFileReader = new CSVFileReader_1.CsvFileReader('football.csv');
//Create an instace of MatchReader and pass in something satis fying
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
const matches = matchReader.matches;
const dateOfFirstMatch = matches[0][0];
console.log(dateOfFirstMatch);
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
