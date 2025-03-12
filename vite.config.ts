
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    allowedHosts: [
      '0a7ce5d3-9cc5-40a8-b63f-74ea4ede1df6.lovableproject.com',
      'localhost'
    ]
  }
})
