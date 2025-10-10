// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio-react/", // ✅ VERY IMPORTANT for GitHub Pages
});
