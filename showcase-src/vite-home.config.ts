import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
