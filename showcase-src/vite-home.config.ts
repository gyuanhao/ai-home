import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Homepage build — mirrors the proven-working showcase config (ESM, no IIFE).
// Outputs to ../home-new, base '/' so assets land at /assets/.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: '../home-new',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: './home.html',
      },
    },
  },
})
