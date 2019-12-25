import { MatchReader } from './inheritance/MatchReader';
import { MatchResult } from './MatchResult';
const reader = new MatchReader('football.csv');
reader.read();
const matches = reader.data;

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
