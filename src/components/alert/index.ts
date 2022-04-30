import { App } from 'vue'
import VtAlert from './src/alert.vue'
import '../theme/alert.scss'

VtAlert.install = function (app: App) {
  app.component(VtAlert.name, VtAlert)
}

export default VtAlert
