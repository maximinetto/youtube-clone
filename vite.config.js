import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteFonts from "vite-plugin-fonts";
import eslintPlugin from "vite-plugin-eslint";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({ cache: false }),
    viteFonts({
      google: {
        families: [{ name: "Roboto", styles: "wght@300;400;700" }],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "/src"),
    },
  },
});
