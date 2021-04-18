import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
    constructor(public team: string) {}

    run(matches: MatchData[]): string {
        let wins = 0;

        for (let match of matches) {
            const home = match[1];
            const away = match[2];
            const result = match[5];
            if (home == this.team && result === MatchResult.HomeWin) {
                wins++;
            } else if (away == this.team && result === MatchResult.AwayWin) {
                wins++;
            }
        }

        return `Team ${this.team} has won ${wins} games`;
    }
}
