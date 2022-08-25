import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const orderRoute = Router();
const controller = new OrderController();

orderRoute.get('/', (req, res) => controller.list(req, res));

export default orderRoute;