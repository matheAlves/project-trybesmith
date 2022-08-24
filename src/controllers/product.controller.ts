import { Request, Response } from 'express';
import ProductService from '../services/product.service';

export default class ProductController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  async list(_req: Request, res: Response) {
    const list = await this.service.list();
    res.status(200).json(list);
  }

  async add(req: Request, res: Response) {
    const product = req.body;
    // console.log(this);
    const result = await this.service.add(product);
    res.status(201).json(result);
  }
}