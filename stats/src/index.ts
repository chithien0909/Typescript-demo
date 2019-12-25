import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import {CsvFileReader} from "./CSVFileReader";

//Create an object tha satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instace of MatchReader and pass in something satis fying
const matchReader = new MatchReader(csvFileReader);
matchReader.load()
const matches = matchReader.matches;

const dateOfFirstMatch = matches[0][0];
console.log(dateOfFirstMatch);
let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
