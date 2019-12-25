import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import {CsvFileReader} from "./CSVFileReader";

//Create an object tha satisfies the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

//Create an instance of MatchReader and pass in something satisfying
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
