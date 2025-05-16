import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // This should be '/' for most deployments
  build: {
    outDir: 'dist', // This is the default, but good to specify
  }
})