import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env.API_URL": JSON.stringify(
      "https://grain-menu-api-hjen.onrender.com/graphql"
    ),
  },
});
