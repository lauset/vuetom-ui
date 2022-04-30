import { App } from 'vue'
import VtCard from './src/card.vue'
import '../theme/card.scss'

VtCard.install = function (app: App) {
  app.component(VtCard.name, VtCard)
}

export default VtCard
