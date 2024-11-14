import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    target: ["chrome89", "edge89", "firefox78", "safari14"], // Ajuste conforme necessário
  },
});
