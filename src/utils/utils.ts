import type { IOrder } from "../models/interfaces";

export const extractFirstName = (fullName: string) => {
  if (!fullName) {
    return fullName;
  }

  const splittedNames = fullName.split(" ");
  return splittedNames[0];
};

export const calculateOrdersSum = (orders: IOrder[]) => {
  if (!orders || !orders.length) {
    return 0;
  }

  return orders.reduce((sum, order) => sum + order.total, 0);
};

export const formatTotalPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    minimumFractionDigits: 0,
    currency: "USD",
  }).format(price);
};
