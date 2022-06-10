import { ITeamForLBServiceResult } from './ITeamForLBServiceResult.interface';

export interface ILeaderboardService {
  getLeaderboard(type: string): Promise<ITeamForLBServiceResult>
}
