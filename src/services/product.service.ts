import connection from '../models/connection';
import ProductModel from '../models/product.model';
import { Product } from '../interfaces';
import validate from '../utils/joi-validators';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async list() {
    const result = await this.model.list();
    return result;
  }

  async add(product: Product) {
    await validate.product(product);
    const result = await this.model.add(product);
    if (result) return result as Product;
  }
}