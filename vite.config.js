import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: { port: 3000 },
  build: {
    outDir: "docs",
    sourcemap: false,
    rollupOptions: {
      input: {
        main: "index.html",
        app: "src/entry.js",
      },
      output: {
        entryFileNames: (chunkInfo) =>
          chunkInfo.name === "app" ? "assets/app.js" : "assets/[name].js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith(".css") ? "assets/app.css" : "assets/[name][extname]",
      },
    },
  },
});
