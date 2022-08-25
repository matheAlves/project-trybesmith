import { Router } from 'express';
import UserController from '../controllers/user.controller';

const userRoute = Router();
const controller = new UserController();

userRoute.post('/', (req, res) => controller.add(req, res));

export default userRoute;