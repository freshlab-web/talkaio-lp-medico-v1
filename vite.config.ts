import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  base:"/talkaio-lp-medico",
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/index-B5YTsUb3.js`,
        chunkFileNames: `assets/[name]-B5YTsUb3.js`,
        assetFileNames: `assets/[name]-BpNuLI0P[extname]`,
      },
    },
 },
}));
