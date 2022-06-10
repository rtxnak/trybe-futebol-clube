import TeamStats from "../../services/leaderboard.helper/teamstats";

const leaderboardAwayResultMock: any[] = [
  {
    name: "Corinthians",
    totalPoints: 6,
    totalGames: 3,
    totalVictories: 2,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 6,
    goalsOwn: 2,
    goalsBalance: 4,
    efficiency: 66.67
  },
  {
    name: "Avaí/Kindermann",
    totalPoints: 3,
    totalGames: 2,
    totalVictories: 1,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 1,
    goalsOwn: 1,
    goalsBalance: 0,
    efficiency: 50
  },
  {
    name: "Bahia",
    totalPoints: 2,
    totalGames: 2,
    totalVictories: 0,
    totalDraws: 2,
    totalLosses: 0,
    goalsFavor: 2,
    goalsOwn: 2,
    goalsBalance: 0,
    efficiency: 33.33
  },
  {
    name: "Botafogo",
    totalPoints: 0,
    totalGames: 2,
    totalVictories: 0,
    totalDraws: 0,
    totalLosses: 2,
    goalsFavor: 1,
    goalsOwn: 4,
    goalsBalance: -3,
    efficiency: 0
  },
];

export default leaderboardAwayResultMock;