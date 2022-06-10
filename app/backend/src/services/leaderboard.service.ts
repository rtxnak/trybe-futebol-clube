import { ILeaderboardRepository } from
  '../interfaces/LeaderboardInterfaces/ILeaderboardRepository.interface';
import TeamStats from './leaderboard.helper/teamstats';
import { ITeamInfoLB } from '../interfaces/LeaderboardInterfaces/ITeamInfoLB.interface';

class LeaderboardService {
  private _ILeaderboardRepository: ILeaderboardRepository;
  constructor(leaderboardRepository: ILeaderboardRepository) {
    this._ILeaderboardRepository = leaderboardRepository;
  }

  async getLeaderboard(type: string) {
    const teamInfo = await this._ILeaderboardRepository.findAll() as unknown as ITeamInfoLB[];
    const leaderboard = teamInfo.map((info: ITeamInfoLB) => new TeamStats(info, type));
    const result = leaderboard.sort((a: TeamStats, b: TeamStats) => b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || a.goalsOwn - b.goalsOwn);
    return { code: 200, result };
  }
}
export default LeaderboardService;

// Sort by two numeric fields => https://stackoverflow.com/questions/6129952/sort-javascript-array-by-two-numeric-fields
