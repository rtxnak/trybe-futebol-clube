import { ITeam } from './ITeam.interface';

export interface ITeamRepository {
  findAll(): Promise<ITeam[]>
  findOne(id: string): Promise<ITeam> | null
}
