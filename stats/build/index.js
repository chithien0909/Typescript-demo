"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CSVFileReader_1 = require("./CSVFileReader");
//Create an object tha satisfies the DataReader interface
const csvFileReader = new CSVFileReader_1.CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisfying
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
