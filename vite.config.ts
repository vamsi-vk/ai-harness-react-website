import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

/**
 * Vite config.
 *
 * Build optimizations:
 * - Route-level code splitting is done in src/App.tsx via React.lazy().
 * - Vendor chunks are split below so React, React Router, and Lucide icons
 *   land in their own long-lived files. They rarely change, so users get
 *   them from the browser cache on subsequent visits.
 * - rollup-plugin-visualizer emits dist/stats.html on every build for
 *   easy bundle inspection. Run `npm run build:analyze` to also auto-open it.
 */
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      filename: "dist/stats.html",
      template: "treemap",
      gzipSize: true,
      brotliSize: true,
      open: mode === "analyze",
    }),
  ],
  server: {
    port: 5173,
    host: true,
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 250,
    rollupOptions: {
      output: {
        // Function form is more reliable than the object form for Vite 6 +
        // Rollup 4 — pattern-matching node_modules paths catches transitive
        // deps (e.g. `scheduler` for React, `@remix-run/router` for React
        // Router) and avoids the "Generated an empty chunk" warning that
        // happens when the entry inlines packages it can re-export.
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (
            id.includes("/react/") ||
            id.includes("/react-dom/") ||
            id.includes("/scheduler/")
          ) {
            return "react-vendor";
          }
          if (id.includes("react-router")) {
            return "router-vendor";
          }
          if (id.includes("lucide-react")) {
            return "icons-vendor";
          }
          return undefined;
        },
      },
    },
  },
}));
