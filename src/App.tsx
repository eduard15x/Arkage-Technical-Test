import { useMemo, useState } from "react";
import { CustomerCard } from "./components/CustomerCard";
import { customers } from "./models/constants/customers";
import type { ICustomer } from "./models/interfaces";
import DetailedCustomerModal from "./components/DetailedCustomerModal";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SortDate } from "./models/constants/enums";
import { calculateOrdersTotalAmount } from "./utils/utils";

export const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<SortDate>(SortDate.NONE);

  const handleViewOrders = (customerId: number) => {
    const selectedCustomer = customers.find(
      (customer) => customer.id === customerId
    );

    if (selectedCustomer) {
      setSelectedCustomer(selectedCustomer);
    }
  };

  const handleCloseModal = () => {
    setSelectedCustomer(null);
  };

  const filteredAndSortedCustomers = useMemo(() => {
    const term = searchTerm.toLowerCase();

    let filtered = customers.filter(
      (customer) =>
        customer.name.toLowerCase().includes(term) ||
        customer.email.toLowerCase().includes(term)
    );

    if (sortOrder !== "none") {
      filtered = [...filtered].sort((a, b) => {
        const sumA = calculateOrdersTotalAmount(a.orders);
        const sumB = calculateOrdersTotalAmount(b.orders);
        return sortOrder === "asc" ? sumA - sumB : sumB - sumA;
      });
    }

    return filtered;
  }, [searchTerm, sortOrder]);

  return (
    <Box sx={{ p: 4 }}>
      <Box display="flex" justifyContent="space-between" gap={2} mb={3}>
        <TextField
          label="Search customers"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name or email"
        />
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Sort by Spent</InputLabel>
          <Select
            value={sortOrder}
            label="Sort by Spent"
            onChange={(e) => setSortOrder(e.target.value as SortDate)}
          >
            <MenuItem value={SortDate.NONE}>None</MenuItem>
            <MenuItem value={SortDate.DESC}>High to Low</MenuItem>
            <MenuItem value={SortDate.ASC}>Low to High</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {filteredAndSortedCustomers.map((customer) => (
        <Box key={customer.id} mb={2}>
          <CustomerCard customer={customer} onViewOrders={handleViewOrders} />
        </Box>
      ))}

      {selectedCustomer && (
        <DetailedCustomerModal
          selectedCustomer={selectedCustomer}
          onClose={handleCloseModal}
        />
      )}
    </Box>
  );
};
