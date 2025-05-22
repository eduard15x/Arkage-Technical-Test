import { Button, Card, CardContent, Typography } from "@mui/material";
import type { ICustomer } from "../models/interfaces";
import {
  calculateOrdersTotalAmount,
  extractFirstName,
  formatTotalPrice,
} from "../utils/utils";

interface ICustomerCardProps {
  customer: ICustomer;
  onViewOrders: (id: number) => void;
}

export const CustomerCard = (props: ICustomerCardProps) => {
  const { customer, onViewOrders } = props;

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6">
          Name: {extractFirstName(customer.name)}
        </Typography>
        <Typography>Email: {customer.email}</Typography>
        <Typography>Orders: {customer.orders.length}</Typography>
        <Typography>
          Total Spent:{" "}
          {formatTotalPrice(calculateOrdersTotalAmount(customer.orders))}
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => onViewOrders(customer.id)}
        >
          View Orders
        </Button>
      </CardContent>
    </Card>
  );
};
