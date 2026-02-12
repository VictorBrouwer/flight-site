import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // LET OP: Vervang dit door jouw exacte repo naam, met slashes eromheen
  base: '/flight-site/', 
})