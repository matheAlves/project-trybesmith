import { Request, Response } from 'express';
import LoginService from '../services/login.service';

export default class LoginController {
  private service: LoginService;

  constructor() {
    this.service = new LoginService();
  }

  async login(req: Request, res: Response) {
    const result = await this.service.login(req.body);
    res.status(200).json(result);
  }
}