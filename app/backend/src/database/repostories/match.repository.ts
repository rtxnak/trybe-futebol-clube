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

  create = async (match: IMatch) => {
    const result = await Match.create(match);

    return result;
  };

  finish = async (id: number) => {
    const update = await Match.update({ inProgress: false }, { where: { id } });
    const result = update[0];
    return result;
  };

  update = async (id: number, homeTeamGoals: number, awayTeamGoals: number) => {
    const update = await Match.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id } },
    );
    const result = update[0];
    return result;
  };
}
