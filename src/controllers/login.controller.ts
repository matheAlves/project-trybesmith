import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import validate from '../middlewares/joi-validators';

export default class LoginController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  async login(req: Request, res: Response) {
    await validate.login(req.body);
    const result = await this.service.login(req.body);
    res.status(200).json(result);
  }
}