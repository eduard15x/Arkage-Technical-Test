import { useState } from "react";
import { CustomerCard } from "./components/CustomerCard";
import { customers } from "./models/constants/customers";
import type { ICustomer } from "./models/interfaces";
import DetailedCustomerModal from "./components/DetailedCustomerModal";

export const App = () => {
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer | null>(
    null
  );

  const handleCustomerSelection = (customerId: number) => {
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

  return (
    <div>
      <div>
        {customers.map((customer) => (
          <div key={customer.id} style={{ marginBottom: "20px" }}>
            <CustomerCard
              customer={customer}
              onViewOrder={handleCustomerSelection}
            />
          </div>
        ))}
      </div>

      {selectedCustomer ? (
        <DetailedCustomerModal
          selectedCustomer={selectedCustomer}
          onClose={handleCloseModal}
        />
      ) : (
        <div>nu e selectat</div>
      )}
    </div>
  );
};
