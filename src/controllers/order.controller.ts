import { Request, Response } from 'express';
import OderService from '../services/order.service';

export default class OrderController {
  private service: OderService;

  constructor() {
    this.service = new OderService();
  }

  async list(_req: Request, res: Response) {
    const result = await this.service.list();
    res.status(200).json(result);
  }
}