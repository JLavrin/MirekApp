import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    host: true,
    proxy: {
      '/update': {
        target: 'http://localhost:5000/api/client/update',
        changeOrigin: false,
        rewrite: (path) => path.replace(/^\/update/, '')
      }
    }
  },
    build: {
    outDir: 'build'
  },
  plugins: [
    react(),
    tsconfigPaths()
  ]
})
