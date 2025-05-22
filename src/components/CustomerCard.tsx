import { Button, Card, CardContent, Typography, Box } from "@mui/material";
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
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
        >
          <Typography variant="h6" sx={{ minWidth: 150 }}>
            Name: {extractFirstName(customer.name)}
          </Typography>
          <Typography sx={{ minWidth: 200 }}>
            Email: {customer.email}
          </Typography>
          <Typography sx={{ minWidth: 100 }}>
            Orders: {customer.orders.length}
          </Typography>
          <Typography sx={{ minWidth: 150 }}>
            Total Spent:{" "}
            {formatTotalPrice(calculateOrdersTotalAmount(customer.orders))}
          </Typography>
          <Button
            variant="contained"
            onClick={() => onViewOrders(customer.id)}
            sx={{ whiteSpace: "nowrap" }}
          >
            View Orders
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
