import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/IX23/", // For gh pages & Other platforms
  base: "./", // For Vercel
  plugins: [react()],
})
