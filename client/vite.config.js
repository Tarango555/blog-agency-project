import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['jwt-decode'], // Externalize the jwt-decode package
    }
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api/': {
        target: 'http://localhost:5050',
        changeOrigin: true,
      }
    }
  }
})
