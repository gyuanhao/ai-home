import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Built output is committed to ai-home/showcase/ and served at myaishome.com/showcase
export default defineConfig({
  plugins: [react()],
  base: '/showcase/',
  build: {
    outDir: '../showcase',
    emptyOutDir: true,
  },
})
