import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es", "cjs"],
      fileName: "widget-weather",
    },
    rollupOptions: {
      external: ["react",'@zly/data-store'],
      output: {
        globals: {
          react: "React",
        },
      },
    },
    outDir: "lib",
  },
});
