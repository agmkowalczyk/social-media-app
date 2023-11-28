import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    root: './',
    base: env.VITE_BASE_URL,
    build: {
      outDir: 'dist',
    },
    publicDir: 'public'
  }
})
