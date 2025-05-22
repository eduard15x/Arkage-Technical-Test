import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import DetailedCustomerModal from "../DetailedCustomerModal";
import type { ICustomer, IOrder } from "../../models/interfaces";

const sampleOrders: IOrder[] = [
  { id: 1, total: 100, date: "2023-01-01" },
  { id: 2, total: 50, date: "2023-02-01" },
  { id: 3, total: 75, date: "2023-01-15" },
];

const sampleCustomer: ICustomer = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  orders: sampleOrders,
};

describe("DetailedCustomerModal", () => {
  it("renders customer name and orders sorted ascending by default", () => {
    const onClose = vi.fn();
    render(<DetailedCustomerModal selectedCustomer={sampleCustomer} onClose={onClose} />);

    // Customer name in dialog title
    expect(screen.getByText("John Doe")).toBeInTheDocument();

    // Orders sorted ascending (oldest first)
    const orderIds = screen.getAllByRole("row").slice(1).map((row) => row.textContent);
    expect(orderIds[0]).toContain("1"); // Oldest (2023-01-01)
    expect(orderIds[1]).toContain("3"); // Next (2023-01-15)
    expect(orderIds[2]).toContain("2"); // Newest (2023-02-01)

    // Average order value displayed
    expect(screen.getByText(/Average Order Value/i)).toBeInTheDocument();
  });

//   it("changes order sorting when select changes", () => {
//     const onClose = vi.fn();
//     render(<DetailedCustomerModal selectedCustomer={sampleCustomer} onClose={onClose} />);

//     // Change sort to Descending (Newest first)
//     const select = screen.getByRole("button", { name: /Oldest First/i });
//     fireEvent.mouseDown(select); // open dropdown

//     const newestFirstOption = screen.getByRole("option", { name: /Newest First/i });
//     fireEvent.click(newestFirstOption);

//     // Now orders should be sorted descending
//     const orderIds = screen.getAllByRole("row").slice(1).map((row) => row.textContent);
//     expect(orderIds[0]).toContain("2"); // Newest
//     expect(orderIds[1]).toContain("3");
//     expect(orderIds[2]).toContain("1"); // Oldest
//   });

  it("shows 'No orders available' if customer has no orders", () => {
    const onClose = vi.fn();
    render(<DetailedCustomerModal selectedCustomer={{ ...sampleCustomer, orders: [] }} onClose={onClose} />);

    expect(screen.getByText(/No orders available/i)).toBeInTheDocument();
  });

  it("calls onClose when Close button is clicked", () => {
    const onClose = vi.fn();
    render(<DetailedCustomerModal selectedCustomer={sampleCustomer} onClose={onClose} />);

    const closeButton = screen.getByRole("button", { name: /Close/i });
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledOnce();
  });
});
