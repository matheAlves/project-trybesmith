import 'express-async-errors';
import express from 'express';
import errorHandler from './middlewares/error-handler';
import productRoute from './routes/product.route';
import userRoute from './routes/user.route';
import orderRoute from './routes/order.route';
import loginRoute from './routes/login.route';

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/orders', orderRoute);
app.use('/products', productRoute);
app.use('/users', userRoute);

app.use(errorHandler);

export default app;
