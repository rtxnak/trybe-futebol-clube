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
    const matchValue = match;
    matchValue.inProgress = true;
    const result = await this._IMatchRepository.create(match);
    return { code: 201, result };
  }
}

export default MatchService;
