import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Santa_Rush/', // Update this with your repository name
  // other configurations...
  plugins: [react()],
})
