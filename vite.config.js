import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/index.js", // Ensure this file exists
      name: "MyReactComponent",
      formats: ["es", "cjs"],
      fileName: (format) => `my-react-component.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"], // Peer dependencies
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
