import { ITeamsFindAllResult } from './ITeamsFindAllResult.interface';
import { ITeamsFindOneResult } from './ITeamFindOneResult.interface';

export interface ITeamService {
  findAll(): Promise<ITeamsFindAllResult>
  findOne(id: string): Promise<ITeamsFindOneResult>
}
