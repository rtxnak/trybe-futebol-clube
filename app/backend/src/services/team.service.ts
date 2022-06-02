import { ITeamsFindAllResult } from '../interfaces/ITeamsFindAllResult.interface';
import { ITeamRepository } from '../interfaces/ITeamRepository.interface';
import { ITeamsFindOneResult } from '../interfaces/ITeamFindOneResult.interface';

class TeamService {
  private _ITeamRepository: ITeamRepository;
  constructor(teamRepository: ITeamRepository) {
    this._ITeamRepository = teamRepository;
  }

  async findAll(): Promise<ITeamsFindAllResult> {
    const result = await this._ITeamRepository.findAll();
    return { code: 200, result };
  }

  async findOne(id: string): Promise<ITeamsFindOneResult> {
    const result = await this._ITeamRepository.findOne(id);

    if (!result) {
      return { code: 400, result: { message: 'not found' } };
    }
    return { code: 200, result };
  }
}

export default TeamService;
