import esbuild from 'rollup-plugin-esbuild'
// import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass'
import { terser } from 'rollup-plugin-terser'
// import babel from 'rollup-plugin-babel'
import replace from '@rollup/plugin-replace'
import path from 'path'

const packagesDir = path.resolve(__dirname, 'packages')
const uiDir = path.resolve(packagesDir, 'vuetom-ui')
const pkg = require(path.resolve(uiDir, `package.json`))

const env = process.env.NODE_ENV

const banner = `/*!
  * ${pkg.name} v${pkg.version}
  * Build Date ${new Date().toLocaleString()} 
  * Build Env ${env}
  * @license MIT
  */`

const file = (type) => `${uiDir}/dist/vuetom-ui.${type}.js`

export { file }

const overrides = {
  compilerOptions: { declaration: true }, // 是否创建 typescript 声明文件
  exclude: [ 
    'node_modules'
  ]
}

export default {
  input: `${uiDir}/index.ts`,
  output: {
    globals: {
      vue: 'Vue',
    },
    name: 'VuetomUI',
    file: `${uiDir}/dist/vuetom-ui.js`,
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
      target: 'esnext',
    }),
    // babel({
    //   exclude: 'node_modules/**',
    // }),
    // resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
      preventAssignment: true
    }),
    // typescript({
    //   tsconfigOverride: overrides
    // })
  ],
}
