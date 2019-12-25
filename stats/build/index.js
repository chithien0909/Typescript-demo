"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./inheritance/MatchReader");
const MatchResult_1 = require("./MatchResult");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
const matches = reader.data;
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
