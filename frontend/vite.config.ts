import tspaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tspaths()],
  build: {
    minify: 'esbuild',
  },
  worker: {
    plugins: () => [react()],
    format: 'es',
  },
})
