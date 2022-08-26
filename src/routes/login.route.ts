import { Router } from 'express';
import LoginController from '../controllers/login.controller';

const loginRoute = Router();
const controller = new LoginController();

loginRoute.post('/', (req, res) => controller.login(req, res));

export default loginRoute;