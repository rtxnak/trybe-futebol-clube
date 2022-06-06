export interface IMatchUpdateResult {
  code: number,
  result: {
    update: {
      homeTeamGoals: number;
      awayTeamGoals: number;
    }
    message: string;
  } | {
    message: string;
  };
}
