import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        // Force all methods through
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            if (proxyReq.method === "OPTIONS") {
              proxyReq.setHeader("Access-Control-Allow-Methods", "PATCH");
            }
          });
        }
      }
    }
  },
  plugins: [react()]
});