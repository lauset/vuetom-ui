import type { App } from 'vue'
import VtConsole from './src/console.vue'
import '../theme/console.scss'

VtConsole.install = function (app: App) {
  app.component(VtConsole.name, VtConsole)
}

export { VtConsole }
export default VtConsole
