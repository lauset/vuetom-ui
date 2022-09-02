import type { App } from 'vue'
import VtLink from './src/link.vue'
import '../theme/link.scss'

VtLink.install = function (app: App) {
  app.component(VtLink.name, VtLink)
}

export { VtLink }
export default VtLink
