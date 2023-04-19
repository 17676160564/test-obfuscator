import { defineConfig } from 'vite'
import { resolve } from "path"
import vue from '@vitejs/plugin-vue'
import { obfuscator } from 'rollup-obfuscator';



const Version = new Date().getTime()
export default defineConfig({


  build: {
    minify: 'terser',
    chunkSizeWarningLimit: Infinity,
    assetsInlineLimit: 4096 * 2,
    commonjsOptions: { include: [] },
    rollupOptions: {
      output: {
        chunkFileNames: `js/[name].${Version}.js`,
        entryFileNames: `js/[name].${Version}.js`,
      },
    },
  },

  plugins: [
    vue(),
    obfuscator(),
  ],

  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      }
    ]
  }

})
