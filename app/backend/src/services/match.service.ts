import { IMatchRepository } from '../interfaces/IMatchRepository.interface';
import { IMatchFindAllResult } from '../interfaces/IMatchFindAllResult.interface';

class MatchService {
  private _IMatchRepository: IMatchRepository;
  constructor(matchRepository: IMatchRepository) {
    this._IMatchRepository = matchRepository;
  }

  async findAll(query: boolean | null): Promise<IMatchFindAllResult> {
    const result = await this._IMatchRepository.findAll(query);
    return { code: 200, result };
  }
}

export default MatchService;
