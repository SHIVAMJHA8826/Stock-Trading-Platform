import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      include: /\.(js|jsx)$/, // Tells React plugin & OXC transformer to parse JSX in .js files
    }),
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
  },
  server: {
    host: 'localhost',
    port: 5173,
    hmr: {
      host: 'localhost',
      port: 5173,
      protocol: 'ws',
    },
  },
})