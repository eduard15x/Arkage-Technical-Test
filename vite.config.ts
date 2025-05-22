import { defineConfig } from "vitest/config";  // change here
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const buildRoot = process.cwd();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // <-- Add this line
    setupFiles: "./src/setupTests.ts",
  },
  server: {
    port: 3001,
  },
  resolve: {
    alias: {
      "@": resolve(buildRoot, "./src"),
    },
  },
});
