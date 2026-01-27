import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: true // This allows Railway to show your site
  },
  server: {
    allowedHosts: true
  }
})