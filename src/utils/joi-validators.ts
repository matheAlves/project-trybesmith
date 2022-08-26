import Joi from 'joi';
import { Login, Product } from '../interfaces';

const validate = {
  async login(incomingLogin: Login) {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    await schema.validateAsync(incomingLogin);
  },

  async product(incomingProduct: Product) {
    const schema = Joi.object({
      name: Joi.string().min(3).required(),
      amount: Joi.string().min(3).required(),
    });
    await schema.validateAsync(incomingProduct);
  },
};

export default validate;