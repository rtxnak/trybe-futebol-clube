import bcrypt = require('bcrypt');
import tokenGenerator from '../utils/tokenGenerator';
import { IUsersRepository } from '../interfaces/IUserRepository.interface';
import { ILoginResult } from '../interfaces/ILoginResult.interface';

class LoginService {
  private _iUsersRepository: IUsersRepository;
  constructor(userRepository: IUsersRepository) {
    this._iUsersRepository = userRepository;
  }

  async login(email: string, password: string): Promise<ILoginResult> {
    const user = await this._iUsersRepository.findUser(email);

    if (!user || !bcrypt.compareSync(password, user?.password as string)) {
      return { code: 401, result: { message: 'Incorrect email or password' } };
    }

    const { id, username, role } = user;

    const token = tokenGenerator.create({ id, username, role, email });
    const result = {
      user: {
        id,
        username,
        role,
        email,
      },
      token,
    };

    return { code: 200, result };
  }
}

export default LoginService;
