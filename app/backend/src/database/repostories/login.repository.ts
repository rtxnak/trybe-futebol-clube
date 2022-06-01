import User from '../models/Users';

export default class LoginRepository {
  findUser = async (email: string) => {
    const result = await User.findOne({ where: { email } });
    return result;
  };
}
