import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Liverpool");
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

//Create an object that satisfies the DataReader interface
/* const csvFileReader = new CsvFileReader("football.csv"); */

//Create an instance of MAtchreader and pass in something satisfying the interface
/* const matchReader = new MatchReader(csvFileReader); */
