import type { App } from 'vue'
import VtIcon from './src/icon.vue'
import '../theme/icon.scss'

VtIcon.install = function (app: App) {
  app.component(VtIcon.name, VtIcon)
}

export { VtIcon }
export default VtIcon
