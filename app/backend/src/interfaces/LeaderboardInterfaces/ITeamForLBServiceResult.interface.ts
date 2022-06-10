import TeamStats from '../../services/leaderboard.helper/teamstats';

export interface ITeamForLBServiceResult {
  code: number,
  result: TeamStats[]
}
