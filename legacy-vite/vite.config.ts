import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/nagashima.shohei/', // Assuming it's deployed to username.github.io/nagashima.shohei/
})
