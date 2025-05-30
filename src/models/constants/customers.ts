import type { ICustomer } from "../interfaces";

export const customers: ICustomer[] = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice@example.com",
    orders: [
      { id: 101, total: 250.5, date: "2024-03-12" },
      { id: 102, total: 75.0, date: "2024-04-01" },
    ],
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob@example.com",
    orders: [
      { id: 103, total: 150.0, date: "2024-02-22" },
      { id: 104, total: 200.75, date: "2024-03-15" },
      { id: 105, total: 99.99, date: "2024-04-03" },
    ],
  },
  {
    id: 3,
    name: "Charlie Adams",
    email: "charlie@example.com",
    orders: [],
  },
  {
    id: 4,
    name: "Dana Williams",
    email: "dana@example.com",
    orders: [{ id: 106, total: 320.0, date: "2024-01-30" }],
  },
  {
    id: 5,
    name: "Eve Thompson",
    email: "eve@example.com",
    orders: [
      { id: 107, total: 210.0, date: "2024-03-10" },
      { id: 108, total: 180.5, date: "2024-03-20" },
      { id: 109, total: 90.0, date: "2024-04-01" },
    ],
  },
];
