import { Request, Response } from 'express';
import OrderService from '../services/order.service';

export default class OrderController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  async list(_req: Request, res: Response) {
    const result = await this.service.list();
    res.status(200).json(result);
  }
}