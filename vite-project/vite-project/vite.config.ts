import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // tailwindcss 추가

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // 추가
})
