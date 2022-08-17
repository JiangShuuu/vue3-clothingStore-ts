import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '~': join(__dirname, 'src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
