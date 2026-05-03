import { fileURLToPath, URL } from 'node:url'
import { dirname, resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions:{
      input:{
        main: resolve(import.meta.dirname, 'index.html'),
        wydarzenia: resolve(import.meta.dirname, 'wydarzenia.html'),
        sekcje: resolve(import.meta.dirname, 'sekcje.html'),
        historia: resolve(import.meta.dirname, 'historia.html'),
        projekty: resolve(import.meta.dirname, 'projekty.html'),
        kontakt: resolve(import.meta.dirname, 'kontakt.html')
      }
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (element) => element.startsWith('iconify-icon')
        }
      }
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    proxy: {
      '/get': {
        target: "http://127.0.0.1:8080/"
      },
      '/shaders': 'http://127.0.0.1:8080/shaders'
    }
  }
})
