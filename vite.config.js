import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Portfolio/",
  plugins: [react()],
  server: { port: 3000 },
  build: {
    outDir: "docs",
    sourcemap: false,
    // default output is fine when base is set to the repo path
  },
});
