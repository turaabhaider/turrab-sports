import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true, // This stops the "Blocked Request" error
    host: '0.0.0.0',
    port: 5173
  },
  preview: {
    allowedHosts: true, // This allows the site to show on Railway
    host: '0.0.0.0',
    port: 8080
  }
})