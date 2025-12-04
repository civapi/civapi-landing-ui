import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react({
      jsxRuntime: "automatic",
      babel: {
        presets: [],
        plugins: [],
      }
    }),
    mode === "development" && componentTagger()
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["three", "react", "react-dom"],
  },

  optimizeDeps: {
    include: ["react", "react-dom"],
    exclude: ["three", "three-globe"],
  },

  build: {
    target: "esnext",
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
}));
