import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update base path to match your repo name
export default defineConfig({
  plugins: [react()],
  base: '/web/',  // If your repo is 'web', else '/stranger-artist-aditya/'
})
