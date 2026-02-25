import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite'
import Sitemap from 'vite-plugin-sitemap'

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
          '**/*.{js,css,html,ico,png,jpg,jpeg,webp,svg,woff,woff2,ttf,eot,txt,xml}']
      }
    }),
    Sitemap({
      hostname: 'https://carlodandan.pages.dev/',
      dynamicRoutes: [
        '/projects',
        '/about',
        '/contact'
      ],
      readable: true,
      robots: [
        {
          userAgent: '*',
          allow: '/',
          crawlDelay: 5,
        },
      ]
    }),
    tailwindcss(),
  ],
  build: {
    outDir: 'dist'
  }
})