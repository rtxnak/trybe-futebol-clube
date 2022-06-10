import * as express from 'express';
import LoginRoutes from './routes/login.routes';
import teamRouter from './routes/team.routes';
import matchRouter from './routes/match.routes';
import leaderboardRouter from './routes/leaderboard.routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT);
  }

  private routes(): void {
    this.app.use('/login', LoginRoutes);
    this.app.use('/teams', teamRouter);
    this.app.use('/matches', matchRouter);
    this.app.use('/leaderboard', leaderboardRouter);
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
