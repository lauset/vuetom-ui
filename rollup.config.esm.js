// rollup.config.esm.js
import baseConfig, { file } from './rollup.config'

export default {
  ...baseConfig,
  output: {
    name: 'VuetomUI',
    file: file('esm'),
    format: 'es'
  }
}