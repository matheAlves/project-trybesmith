import { Router } from 'express';
// import { Request, Response } from 'express';
import ProductController from '../controllers/product.controller';

const productRoute = Router();
const controller = new ProductController();

productRoute.get('/', (req, res) => controller.list(req, res));
productRoute.post('/', (req, res) => controller.add(req, res));

export default productRoute;