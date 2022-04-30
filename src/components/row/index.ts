import { App } from 'vue'
import VtRow from './src/row'
import '../theme/row.scss'

VtRow.install = function (app: App) {
  app.component(VtRow.name, VtRow)
}

export default VtRow
