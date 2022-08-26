import Joi from 'joi';
import { Login } from '../interfaces';

const validate = {
  async login(incomeLoginData: Login) {
    const schema = Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    });
    await schema.validateAsync(incomeLoginData);
  },
};

export default validate;