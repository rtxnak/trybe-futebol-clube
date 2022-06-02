import { NextFunction, Request, Response } from 'express';
import { IUsersService } from '../interfaces/IUserService.interface';
import { ILoginValidate } from '../interfaces/ILoginValidate.interface';

class LoginController {
  private _IUsersService: IUsersService;
  constructor(userRepository: IUsersService) {
    this._IUsersService = userRepository;
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        const message = 'All fields must be filled';
        return res.status(400).json({ message });
      }

      const user = await this._IUsersService.login(email, password);

      return res.status(user.code as number).json(user.result);
    } catch (err) {
      next(err);
    }
  }

  async validate(req: Request, res: Response, next: NextFunction) {
    try {
      const { authorization } = req.headers;
      const user = this._IUsersService.validate(authorization as string);
      const { code, result } = user as ILoginValidate;
      return res.status(code).json(result);
    } catch (err) {
      next(err);
    }
  }
}

export default LoginController;
