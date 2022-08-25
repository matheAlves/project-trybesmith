import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  // async list(_req: Request, res: Response) {
  //   const list = await this.service.list();
  //   res.status(200).json(list);
  // }

  async add(req: Request, res: Response) {
    const user = req.body;
    const result = await this.service.add(user);
    res.status(201).json(result);
  }
}