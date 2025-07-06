import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [ vue() ],
  build: {
    // carpeta de salida relativa a este fichero:
    outDir: path.resolve(__dirname, '../static/dist'),
    emptyOutDir: true,     // limpia dist antes de cada build
    assetsDir: 'assets',   // subcarpeta assets/

    // para que tus <link> y <script> apunten a /static/dist/
    base: '/static/dist/',

    // control fino de nombres (sin folders extra):
    rollupOptions: {
      output: {
        entryFileNames:   'assets/[name].[hash].js',
        chunkFileNames:   'assets/[name].[hash].js',
        assetFileNames:   'assets/[name].[hash].[ext]'
      }
    }
  }
})
