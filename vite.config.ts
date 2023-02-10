import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      workbox: {
        globPatterns: ['**/*.{js,jsx,tsx,ts,css,html,ico,png,jpg,jpeg,svg}']
      },
      devOptions: {
        enabled: true
      },
      includeAssets: ['logo.svg'],
      manifest: {
        name: 'مافیا بیدار شه',
        short_name: 'مافیا',
        description: 'اپ بازی مافیا و پدرخوانده',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/logo.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: '/logo.svg',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      }
    })
  ]
})
