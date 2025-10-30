import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ For Vercel & GitHub Pages — ensures correct base path
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    open: true,
  },
})
