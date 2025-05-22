import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import type { ICustomer, IOrder } from "../models/interfaces";
import { useState } from "react";
import { SortDate } from "../models/constants/enums";
import { format } from "date-fns";
import {
  calculateOrdersAverage,
  formatTotalPrice,
  sortOrders,
} from "../utils/utils";

interface IDetailedCustomerModalProps {
  selectedCustomer: ICustomer;
  onClose: () => void;
}

const DetailedCustomerModal = (props: IDetailedCustomerModalProps) => {
  const { selectedCustomer, onClose } = props;
  const [sortOrder, setSortOrder] = useState<SortDate>(SortDate.ASC);

  const sortedOrders = sortOrders(sortOrder, selectedCustomer.orders);

  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{selectedCustomer?.name}</DialogTitle>

      <DialogContent dividers>
        {sortedOrders.length > 0 && (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="subtitle1">Sort by Date:</Typography>
            <Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as SortDate)}
              size="small"
            >
              <MenuItem value={SortDate.ASC}>Oldest First</MenuItem>
              <MenuItem value={SortDate.DESC}>Newest First</MenuItem>
            </Select>
          </Box>
        )}

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedOrders.map((order: IOrder) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  {format(new Date(order.date), "dd/MM/yyyy")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {sortedOrders.length ? (
          <Typography variant="subtitle1" textAlign="right" mt={2}>
            Average Order Value:{" "}
            <strong>
              {formatTotalPrice(
                calculateOrdersAverage(selectedCustomer.orders)
              )}
            </strong>
          </Typography>
        ) : (
          <Typography variant="subtitle1" textAlign="left" mt={2}>
            <strong>No orders available.</strong>
          </Typography>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DetailedCustomerModal;
