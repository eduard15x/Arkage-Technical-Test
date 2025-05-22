// src/components/__tests__/CustomerCard.test.tsx
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomerCard } from "../CustomerCard";
import type { ICustomer } from "../../models/interfaces";

// Sample customer data for testing
const sampleCustomer: ICustomer = {
  id: 1,
  name: "Alice Smith",
  email: "alice@example.com",
  orders: [
    { id: 101, total: 250.5, date: "2024-03-12" },
    { id: 102, total: 75.0, date: "2024-04-01" },
  ],
};

describe("CustomerCard", () => {
  it("renders customer info correctly", () => {
    const onViewOrders = vi.fn();

    render(<CustomerCard customer={sampleCustomer} onViewOrders={onViewOrders} />);

    // Check if name (first name) is rendered
    expect(screen.getByText(/Name:/)).toHaveTextContent("Name: Alice");

    // Check if email is rendered
    expect(screen.getByText(/Email:/)).toHaveTextContent("Email: alice@example.com");

    // Check number of orders rendered
    expect(screen.getByText(/Orders:/)).toHaveTextContent("Orders: 2");

    // Check total spent rendered (formatted)
    expect(screen.getByText(/Total Spent:/)).toHaveTextContent("Total Spent: $325.5");
  });

  it("calls onViewOrders with correct id when button clicked", async () => {
    const onViewOrders = vi.fn();

    render(<CustomerCard customer={sampleCustomer} onViewOrders={onViewOrders} />);

    const user = userEvent.setup();

    const button = screen.getByRole("button", { name: /View Orders/i });

    await user.click(button);

    expect(onViewOrders).toHaveBeenCalledOnce();
    expect(onViewOrders).toHaveBeenCalledWith(sampleCustomer.id);
  });
});
