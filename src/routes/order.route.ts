import { Router } from 'express';
import OrderController from '../controllers/order.controller';
import validateToken from '../middlewares/token-validation';

const orderRoute = Router();
const controller = new OrderController();

orderRoute.get('/', (req, res) => controller.list(req, res));
orderRoute.post('/', validateToken, (req, res) => controller.newOrder(req, res));

export default orderRoute;