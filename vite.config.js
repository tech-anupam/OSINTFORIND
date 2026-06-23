import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    rollupOptions: {
      output: {
        manualChunks: () => "index",
        entryFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
        chunkFileNames: "assets/[name].js"
      }
    }
  }
})