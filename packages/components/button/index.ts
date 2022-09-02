import type { App } from 'vue'
import VtButton from './src/button.vue'
import '../theme/button.scss'

VtButton.install = function (app: App) {
  app.component(VtButton.name, VtButton)
}

export { VtButton }
export default VtButton
