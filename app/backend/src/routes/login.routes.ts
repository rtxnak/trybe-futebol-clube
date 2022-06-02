import { Router } from 'express';
import LoginController from '../controllers/login.controller';
import LoginService from '../services/login.service';
import LoginRepository from '../database/repostories/login.repository';

const loginRepository = new LoginRepository();
const loginService = new LoginService(loginRepository);
const loginController = new LoginController(loginService);

const loginRouter = Router();

loginRouter.post('/', (req, res, next) => {
  loginController.login(req, res, next);
});

loginRouter.get('/validate', (req, res, next) => {
  loginController.validate(req, res, next);
});

export default loginRouter;
