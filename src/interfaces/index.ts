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

export interface BlueMonday {
  productsIds: number[]
}

export interface Order extends BlueMonday {
  id?: number,
  userId: number,
}