import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:'/wink-and-flirt/',
  plugins: [react() , tailwindcss(), ],
  build: {
    assetsInlineLimit: 0, 
  },
})
