
import type { App } from 'vue'
import VtDiv from './div.vue'
import './div.scss'

VtDiv.name = 'VtDiv'
VtDiv.install = function (app: App) {
  app.component(VtDiv.name, VtDiv)
}

export { VtDiv }
export default VtDiv