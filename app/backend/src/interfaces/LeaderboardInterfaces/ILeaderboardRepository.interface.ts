import { ITeam } from '../ITeam.interface';

export interface ILeaderboardRepository {
  findAll(): Promise<ITeam[]>
}
