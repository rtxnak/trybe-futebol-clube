import { IMatchRepository } from '../interfaces/IMatchRepository.interface';
import { IMatchFindAllResult } from '../interfaces/IMatchFindAllResult.interface';
import { IMatch } from '../interfaces/IMatch.interface';

class MatchService {
  private _IMatchRepository: IMatchRepository;
  constructor(matchRepository: IMatchRepository) {
    this._IMatchRepository = matchRepository;
  }

  async findAll(query: boolean | null): Promise<IMatchFindAllResult> {
    const result = await this._IMatchRepository.findAll(query);
    return { code: 200, result };
  }

  async create(match: IMatch) {
    try {
      const matchValue = match;
      matchValue.inProgress = true;

      if (matchValue.homeTeam === matchValue.awayTeam) {
        const result = { message: 'It is not possible to create a match with two equal teams' };
        return { code: 401, result };
      }
      const result = await this._IMatchRepository.create(match);
      return { code: 201, result };
    } catch (err) {
      const result = { message: 'There is no team with such id!' };
      return { code: 404, result };
    }
  }

  async finish(id: number) {
    const finishResult = await this._IMatchRepository.finish(id);

    if (finishResult) {
      const result = { message: 'Finished' };
      return { code: 200, result };
    }
    const result = { message: 'Already finished' };
    return { code: 400, result };
  }
}

export default MatchService;
