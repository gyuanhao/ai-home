import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 全站 React 页构建：home（首页）+ tools（工具库）+ models（模型库）
// 输出到 ../home-new，产物拷到站点根（index.html / tools.html / models.html + assets/）
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: '../home-new',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: './home.html',
        tools: './tools.html',
        models: './models.html',
      },
    },
  },
})
