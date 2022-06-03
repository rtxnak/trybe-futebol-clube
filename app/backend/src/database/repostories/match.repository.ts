import Match from '../models/Matches';
import Team from '../models/Teams';
import { IMatch } from '../../interfaces/IMatch.interface';

export default class MatchRepository {
  findAll = async (query: boolean | null): Promise<IMatch[]> => {
    const result = await Match.findAll({
      where: query === null ? {} : { inProgress: query },
      include: [
        { model: Team, as: 'teamHome', attributes: ['teamName'] },
        { model: Team, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return result;
  };
}
