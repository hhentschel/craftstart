import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import ViteRestart from 'vite-plugin-restart'
import viteCompression from 'vite-plugin-compression'
import manifestSRI from 'vite-plugin-manifest-sri'
import { visualizer } from 'rollup-plugin-visualizer'
import eslintPlugin from 'vite-plugin-eslint'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import critical from 'rollup-plugin-critical'
import { ViteFaviconsPlugin } from 'vite-plugin-favicon2'
import * as path from 'path'

export default defineConfig(({command}) => ({
  base: command === 'serve'? '' : '/dist/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        'app': './src/js/app.ts',
      },
      output: {
        sourcemap: true,
      }
    }
  },
  plugins: [
    critical({
      criticalUrl: 'https://google.com',
      criticalBase: '../web/dist/criticalcss/',
      criticalPages: [
        {
          uri: '/',
          template: 'index',
        }
      ],
      criticalConfig: {},
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    nodeResolve({
      modulePaths: [
          path.resolve('./node_modules'),
      ]
    }),
    ViteFaviconsPlugin(
      {
        logo: './src/images/favicon.png',
        inject: false,
        outputPath: 'favicons',
      }),
    ViteRestart(
      {
        reload: ['./src/templates/**/*'],
      }
    ),
    vue(),
    viteCompression({
      filter: /\.(js|mjs|json|css|map)$/i
    }),
    manifestSRI(),
    visualizer({
      filename: '../src/web/dist/assets/stats/html',
      template: 'treemap',
      sourcemap: true,
    }),
    // eslintPlugin({
    //   fix: true,
    //   cache: false,
    // }),
  ],
  publicDir: './src/public',
  resolve: {
    alias: [
        {find: '~', replacement: path.resolve(__dirname, '../src')},
        {find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js'},
    ],
    preserveSymlinks: true,
  },
  server: {
    fs: {
      strict: false,
    },
    host: '0.0.0.0',
    port: 3000,
      strictPort: true,
    }
}))

