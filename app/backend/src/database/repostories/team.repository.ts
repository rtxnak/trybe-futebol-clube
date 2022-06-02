import Team from '../models/Teams';
import { ITeam } from '../../interfaces/ITeam.interface';

export default class TeamRepository {
  findAll = async (): Promise<ITeam[]> => {
    const result = await Team.findAll();
    return result;
  };

  findOne = async (id: string): Promise<ITeam | null> => {
    const result = await Team.findOne({ where: { id } });
    return result;
  };
}
