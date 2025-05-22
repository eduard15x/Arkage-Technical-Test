import { useState } from "react";
import { CustomerCard } from "./components/CustomerCard";
import { customers } from "./models/constants/customers";
import type { ICustomer } from "./models/interfaces";
import DetailedCustomerModal from "./components/DetailedCustomerModal";
import { Box, TextField } from "@mui/material";

export const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

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

  const filteredCustomers = customers.filter((customer) => {
    const term = searchTerm.toLowerCase();
    return (
      customer.name.toLowerCase().includes(term) ||
      customer.email.toLowerCase().includes(term)
    );
  });

  return (
    <Box sx={{ p: 4 }}>
      <TextField
        label="Search customers"
        variant="outlined"
        fullWidth
        sx={{ mb: 3 }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by name or email"
      />
      {filteredCustomers.map((customer) => (
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
