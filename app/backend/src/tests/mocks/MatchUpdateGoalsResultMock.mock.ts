import { IMatchUpdateResult } from "../../interfaces/IMatchUpdateResult.interface";

const MatchUpdateGoalsResultMock: IMatchUpdateResult = {
  code: 200,
  result: {
    update: {
      homeTeamGoals: 99,
      awayTeamGoals: 99,
    },
    message: "Goals Updated",
  },
}

export default MatchUpdateGoalsResultMock;