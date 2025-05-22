import { describe, it, expect } from "vitest";
import {
  extractFirstName,
  calculateOrdersTotalAmount,
  calculateOrdersAverage,
  formatTotalPrice,
  sortOrders,
} from "./utils"; // Adjust the path if needed
import { SortDate } from "../models/constants/enums";

const sampleOrders = [
  { id: 1, total: 100, date: "2024-05-10" },
  { id: 2, total: 200, date: "2024-04-15" },
  { id: 3, total: 50, date: "2024-06-01" },
];

describe("Utils functions", () => {
  describe("extractFirstName", () => {
    it("returns the first name from full name", () => {
      expect(extractFirstName("Alice Smith")).toBe("Alice");
      expect(extractFirstName("Bob")).toBe("Bob");
    });

    it("returns empty string when given empty string", () => {
      expect(extractFirstName("")).toBe("");
    });

    it("returns undefined or null if passed", () => {
      expect(extractFirstName(null)).toBe(null);
    });
  });

  describe("calculateOrdersTotalAmount", () => {
    it("calculates total amount correctly", () => {
      expect(calculateOrdersTotalAmount(sampleOrders)).toBe(350);
    });

    it("returns 0 for empty array or falsy", () => {
      expect(calculateOrdersTotalAmount([])).toBe(0);
      expect(calculateOrdersTotalAmount(null)).toBe(0);
    });
  });

  describe("calculateOrdersAverage", () => {
    it("calculates average correctly", () => {
      expect(calculateOrdersAverage(sampleOrders)).toBeCloseTo(116.6666667);
    });

    it("returns 0 for empty array or falsy", () => {
      expect(calculateOrdersAverage([])).toBe(0);
      expect(calculateOrdersAverage(null)).toBe(0);
    });
  });

  describe("formatTotalPrice", () => {
    it("formats numbers as USD currency", () => {
      expect(formatTotalPrice(1234)).toBe("$1,234");
      expect(formatTotalPrice(0)).toBe("$0");
      expect(formatTotalPrice(1234.56)).toBe("$1,234.56");
    });
  });

  describe("sortOrders", () => {
    it("sorts orders ascending by date", () => {
      const sortedAsc = sortOrders(SortDate.ASC, sampleOrders);
      expect(sortedAsc.map((o) => o.id)).toEqual([2, 1, 3]);
    });

    it("sorts orders descending by date", () => {
      const sortedDesc = sortOrders(SortDate.DESC, sampleOrders);
      expect(sortedDesc.map((o) => o.id)).toEqual([3, 1, 2]);
    });

    it("does not mutate original array", () => {
      const copy = [...sampleOrders];
      sortOrders(SortDate.ASC, sampleOrders);
      expect(sampleOrders).toEqual(copy);
    });
  });
});
