import Joi from 'joi';
import { Login, Product, User } from '../interfaces';

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
};

export default validate;