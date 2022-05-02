import esbuild from 'rollup-plugin-esbuild'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass'
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'

const env = process.env.NODE_ENV

const pkg = require('./package.json')

const banner = `/*!
  * ${pkg.name} v${pkg.version}
  * Build Date ${new Date().toLocaleString()} 
  * Build Env ${env}
  * @license MIT
  */`

const file = (type) => `dist/vuetom-ui.${type}.js`

export { file }

const overrides = {
  compilerOptions: { declaration: true }, // 是否创建 typescript 声明文件
  exclude: [ // 排除项
    'node_modules',
    'src/App.vue',
    'src/main.ts'
  ]
}

export default {
  input: './src/index.ts',
  output: {
    globals: {
      vue: 'Vue',
    },
    name: 'VuetomUI',
    file: 'dist/vuetom-ui.js',
    format: 'umd',
    banner: banner,
    plugins: [process.env.NODE_ENV === 'production' ? terser() : null],
  },
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    vue({
      include: /\.vue$/,
      target: 'browser',
    }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015',
    }),
    // babel({
    //   exclude: 'node_modules/**',
    // }),
    // resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    // typescript({
    //   tsconfigOverride: overrides
    // })
  ],
}
