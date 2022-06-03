import IMatchRepository from '../database/repostories/match.repository';
import { IMatchFindAllResult } from '../interfaces/IMatchFindAllResult.interface';

class MatchService {
  private _IMatchRepository: IMatchRepository;
  constructor(matchRepository: IMatchRepository) {
    this._IMatchRepository = matchRepository;
  }

  async findAll(): Promise<IMatchFindAllResult> {
    const result = await this._IMatchRepository.findAll();
    return { code: 200, result };
  }
}

export default MatchService;
