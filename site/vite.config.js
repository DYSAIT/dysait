import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' => build portável para qualquer host/pasta
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
