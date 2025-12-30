import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',  // ← ADD THIS (fixes Vercel paths)
  build: {
    outDir: 'dist'  // ← ADD THIS (explicit output)
  },
  plugins: [react(), tailwindcss()],
})
