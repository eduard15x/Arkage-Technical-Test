import type { ICustomer } from "../models/interfaces";
import {
  calculateOrdersSum,
  extractFirstName,
  formatTotalPrice,
} from "../utils/utils";

interface ICustomerCardProps {
  customer: ICustomer;
  onViewOrder: (id: number) => void;
}

export const CustomerCard = (props: ICustomerCardProps) => {
  const { customer, onViewOrder } = props;

  return (
    <>
      <div>Name - {extractFirstName(customer.name)}</div>
      <div>Email -{customer.email}</div>
      <div>Number of orders - {customer.orders.length}</div>
      <div>
        Total amount spent (sum of all order amounts) -{" "}
        {formatTotalPrice(calculateOrdersSum(customer.orders))}
      </div>

      <button onClick={() => onViewOrder(customer.id)}>View Orders</button>
    </>
  );
};
