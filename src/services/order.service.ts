import { BlueMonday, Order, User } from '../interfaces';
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import ProductModel from '../models/product.model';
import validate from '../utils/joi-validators';
import UserModel from '../models/user.model';

export default class OrderService {
  public model: OrderModel;

  public userModel: UserModel;

  public productModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.userModel = new UserModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public async list() {
    const result = await this.model.list();
    return result;
  }

  public async newOrder(payload: BlueMonday, { username }: User): Promise<Order> {
    await validate.newOrder(payload);
    const userId = await this.userModel.findIdOf(username);
    const orderId = await this.model.newOrder(userId);
    const { productsIds } = payload;
    await Promise.all(
      productsIds.map((pId) => this.productModel.updateOrder(pId, orderId)),
    );
    return { userId, productsIds };
  }
}