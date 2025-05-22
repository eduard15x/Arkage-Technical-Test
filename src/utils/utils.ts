import { SortDate } from "../models/constants/enums";
import type { IOrder } from "../models/interfaces";

export const extractFirstName = (fullName: string) => {
  if (!fullName) {
    return fullName;
  }

  const splittedNames = fullName.split(" ");
  return splittedNames[0];
};

export const calculateOrdersTotalAmount = (orders: IOrder[]) => {
  if (!orders || !orders.length) {
    return 0;
  }

  return orders.reduce((sum, order) => sum + order.total, 0);
};

export const calculateOrdersAverage = (orders: IOrder[]) => {
  if (!orders || !orders.length) {
    return 0;
  }

  return calculateOrdersTotalAmount(orders) / orders.length;
};

export const formatTotalPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    minimumFractionDigits: 0,
    currency: "USD",
  }).format(price);
};

export const sortOrders = (sortOrder: SortDate, orders: IOrder[]) => {
  return [...orders].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === SortDate.ASC ? dateA - dateB : dateB - dateA;
  });
};
