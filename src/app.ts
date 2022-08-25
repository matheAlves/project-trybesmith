import express from 'express';
import productRoute from './routes/product.route';
import 'express-async-errors';
import userRoute from './routes/user.route';
import orderRoute from './routes/order.route';

const app = express();

app.use(express.json());

app.use('/orders', orderRoute);
app.use('/products', productRoute);
app.use('/users', userRoute);

export default app;
