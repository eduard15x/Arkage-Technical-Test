import type { IOrder } from "./order";

export interface ICustomer {
  id: number;
  name: string;
  email: string;
  orders: IOrder[];
}
