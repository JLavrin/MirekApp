import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    base: '/MirekApp/',
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000/api',
        changeOrigin: false,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/post': {
        target: 'http://localhost:5000/agreements',
        changeOrigin: false,
        rewrite: (path) => path.replace(/^\/post/, '')
      },
      '/api/clients': {
        target: 'http://localhost:5000/api/clients',
        changeOrigin: false,
        rewrite: (path) => path.replace(/^\/api\/clients/, '')
      },
      '/api/agreements': {
        target: 'http://localhost:5000/api/agreements',
        changeOrigin: false,
        rewrite: (path) => path.replace(/^\/api\/agreements/, '')
      },
    }
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  plugins: [
    react(),
    tsconfigPaths()
  ]
})
