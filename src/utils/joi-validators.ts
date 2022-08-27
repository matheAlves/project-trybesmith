import Joi from 'joi';
import { Login, Product, BlueMonday, User } from '../interfaces';

const validate = {
  async login(payload: Login) {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    await schema.validateAsync(payload);
  },

  async product(payload: Product) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      amount: Joi.string().min(3).required(),
    });
    await schema.validateAsync(payload);
  },

  async user(payload: User) {
    const schema = Joi.object({
      username: Joi.string().min(3).required(),
      classe: Joi.string().min(3).required(),
      level: Joi.number().min(1).required(),
      password: Joi.string().min(8).required(),
    });
    await schema.validateAsync(payload);
  },

  async newOrder(bizarreLoveTriangle: BlueMonday) {
    const trueFaith = Joi.object({
      productsIds: Joi.array().items(
        Joi.number(),
      ).min(1).message('"productsIds" must include only numbers')
        .required(),
    });
    await trueFaith.validateAsync(bizarreLoveTriangle);
  },
};

export default validate;