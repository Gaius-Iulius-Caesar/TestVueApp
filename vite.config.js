import path from 'path'
import { defineConfig } from "vite";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint"; // 导入包
import { resolve } from "path"; // 主要用于alias文件路径别名
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// https://vitejs.dev/config/

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [
    vue(),
    // 增加下面的配置项,这样在运行时就能检查eslint规范
    eslintPlugin({
      include: ["src/**/*.{vue,js,jsx,cjs,mjs}", "src/*.{vue,js,jsx,cjs,mjs}"],
    }),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],

      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),

        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],

      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),

    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
      ],

      dts: path.resolve(pathSrc, 'components.d.ts'),
    }),

    Icons({
      autoInstall: true,
      compiler: "vue3",
    }),
  ],
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: "./",

  //  构建
  build: {
    outDir: "dist", // 指定打包输出路径
    assetsDir: "assets", // 指定静态资源存放路径
    cssCodeSplit: true, // css代码拆分,禁用则所有样式保存在一个css里面
    sourcemap: false, // 是否构建source map 文件

    // 生产环境取消 console
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    // 会打包出 css js 等文件夹 目录显得清晰
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
      },
    },
  },

  // 别名
  resolve: {
    alias: {
      "@": resolve(__dirname, ".", "src/"),
    },
  },

  // 本地服务
  server: {
    host: "0.0.0.0", // ip
    port: 8080, // 端口号
    open: false, // 是否自动在浏览器打开
    https: false, // 是否开启 https
    // 跨域代理配置
    proxy: {
      "/api": {
        target: "http://localhost:9090",
        changeOrigin: true,
        rewrite: (path) => path.replace(/\/api/, ""),
      },
    },
  },
});
