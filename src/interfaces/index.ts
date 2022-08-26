export interface Product {
  id?: number;
  name: string;
  amount: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface User extends Login {
  id?: number;
  classe: string;
  level: number;
}

export interface Token {
  token: string;
}

export interface Order {
  id: number,
  userId: number,
  productIds: number[]
}
