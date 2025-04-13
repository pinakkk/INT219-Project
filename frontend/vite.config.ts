import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
  css: {
    postcss: "./postcss.config.js",
  },
  server: {
    proxy: {
      "/ipquest/backend": {
        target: "http://localhost",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ipquest\/backend/, "/ipquest/backend"),
      },
    },
  },
});
