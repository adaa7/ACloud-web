import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[dir]-[name]",
    }),
  ],
  server:{
    proxy:{
       '/api':{
           target:"http://localhost:8080/", //跨域地址
           changeOrigin:true, //支持跨域
           rewrite:(path) => path.replace(/^\/api/, "")//重写路径,替换/api
       }
    }
 },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
