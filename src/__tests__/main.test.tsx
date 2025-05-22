// src/__tests__/main.test.tsx
import { describe, it } from "vitest";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "../App";

describe("main.tsx bootstrap", () => {
  it("renders App without crashing", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    const root = createRoot(div);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });
});
