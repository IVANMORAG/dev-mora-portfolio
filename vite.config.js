import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'; // Importación necesaria

export default defineConfig({
  plugins: [react(), svgr()],
  base: '/', // This should be '/' for most deployments
  build: {
    outDir: 'dist', // This is the default, but good to specify
  }
})