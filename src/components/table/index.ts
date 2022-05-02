import { App } from 'vue'
import VtTable from './src/VtTable.vue'
// import './styles/style.scss'

VtTable.install = function (app: App) {
  app.component(VtTable.name, VtTable)
}

export default VtTable
