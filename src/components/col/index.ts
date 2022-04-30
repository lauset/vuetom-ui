import { App } from 'vue'
import VtCol from './src/col'
import '../theme/col.scss'

VtCol.install = function (app: App) {
  app.component(VtCol.name, VtCol)
}

export default VtCol
