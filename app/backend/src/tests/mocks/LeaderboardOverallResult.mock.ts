import TeamStats from '../../services/leaderboard.helper/teamstats';

const leaderboardOverallResultMock: any[] = [
  {
    name: 'Corinthians',
    totalPoints: 12,
    totalGames: 5,
    totalVictories: 4,
    totalDraws: 0,
    totalLosses: 1,
    goalsFavor: 12,
    goalsOwn: 3,
    goalsBalance: 9,
    efficiency: 80
  },
  {
    name: 'Avaí/Kindermann',
    totalPoints: 4,
    totalGames: 5,
    totalVictories: 1,
    totalDraws: 1,
    totalLosses: 3,
    goalsFavor: 4,
    goalsOwn: 8,
    goalsBalance: -4,
    efficiency: 26.67
  },
  {
    name: 'Botafogo',
    totalPoints: 4,
    totalGames: 5,
    totalVictories: 1,
    totalDraws: 1,
    totalLosses: 3,
    goalsFavor: 3,
    goalsOwn: 8,
    goalsBalance: -5,
    efficiency: 26.67
  },
  {
    name: 'Bahia',
    totalPoints: 2,
    totalGames: 5,
    totalVictories: 0,
    totalDraws: 2,
    totalLosses: 3,
    goalsFavor: 2,
    goalsOwn: 6,
    goalsBalance: -4,
    efficiency: 13.33
  },
];

export default leaderboardOverallResultMock;