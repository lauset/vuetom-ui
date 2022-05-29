import { App } from 'vue'
import VtJson from './src/json-viewer.vue'

VtJson.install = function (app: App) {
  app.component(VtJson.name, VtJson)
}

export default VtJson
