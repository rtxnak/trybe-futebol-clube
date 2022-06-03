import Match from '../models/Matches';
import Team from '../models/Teams';
import { IMatch } from '../../interfaces/IMatch.interface';

export default class IMatchRepository {
  findAll = async (): Promise<IMatch[]> => {
    const result = await Match.findAll({
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return result;
  };
}
