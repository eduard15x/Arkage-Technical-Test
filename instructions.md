# Developer Coding Challenge

## Overview
This test is designed to evaluate your skills in array and object manipulation, DOM handling, and basic React (if you choose to use it). You are free to use either **Vanilla JavaScript** or **React**. There is no preferred framework for this test, only clarity, code quality, and performance matter.

---

## Requirements

### Scenario:
You are given a JSON array of customers. Each customer has basic details (id, name, email) and a list of orders. Each order includes the order id, amount, and date.

```json
[
   {
      id: 1,
      name: "Alice Smith",
      email: "alice@example.com",
      orders: [
         { id: 101, total: 250.5, date: "2024-03-12" },
         { id: 102, total: 75.0, date: "2024-04-01" }
      ]
   },
   {
      id: 2,
      name: "Bob Johnson",
      email: "bob@example.com",
      orders: [
         { id: 103, total: 150.0, date: "2024-02-22" },
         { id: 104, total: 200.75, date: "2024-03-15" },
         { id: 105, total: 99.99, date: "2024-04-03" }
      ]
   },
   {
      id: 3,
      name: "Charlie Adams",
      email: "charlie@example.com",
      orders: []
   },
   {
      id: 4,
      name: "Dana Williams",
      email: "dana@example.com",
      orders: [
         { id: 106, total: 320.0, date: "2024-01-30" }
      ]
   },
   {
      id: 5,
      name: "Eve Thompson",
      email: "eve@example.com",
      orders: [
         { id: 107, total: 210.0, date: "2024-03-10" },
         { id: 108, total: 180.5, date: "2024-03-20" },
         { id: 109, total: 90.0, date: "2024-04-01" }
      ]
   }
]
```

### Tasks:

1. **Display a list of all customers** on a main page. For each customer, show:
    - Name
    - Email
    - Number of orders
    - Total amount spent (sum of all order amounts)

Example Output:

```json
   Customer: Alice  
   Total Amount: €325.5  
   Number of Orders: 2  
   [View Orders]
```

2. **When clicking a View Orders link**, open a **detail modal/page** that shows:
    - The customer’s name and surname
    - A list of their orders with:
        - Order ID
        - Amount
        - Date (formatted as DD/MM/YYYY)
        - A **sort control** to order the transactions by date (ascending/descending)

3. At the bottom of the list in the orders detail page/modal add the average order value

4. **(Bonus)** Add a search bar on the main page to filter customers by name or email.

5. **(Bonus)** Sort customers by total amount spent.

---

## Technical Notes
- If you use React, you can use functional components and hooks.
- Styling is not required, but keep the layout readable.

---

## Submission
- Submit your code as a zip or via GitHub.
- Include a `README.md` with instructions to run the app locally.
- If using React, specify whether it's Vite, Create React App, etc.

Good luck! 🚀

