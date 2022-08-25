export interface Product {
  id?: number;
  name: string;
  amount: string;
}

export interface User {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface Token {
  token: string;
}

export interface Order {
  id: number,
  userId: number,
  productIds: number[]
}