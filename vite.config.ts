import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002, // Portu buraya sabitledik
    strictPort: true, // Eğer 3002 doluysa hata versin, başka porta geçmesin
  }
})