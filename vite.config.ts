import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,jpg,jpeg,webp,svg,woff,woff2,ttf,eot}']
      }
    }),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist'
  }
})