import { App } from 'vue'

import VtAlert from './components/alert'
import VtButton from './components/button'
import VtCard from './components/card'
import VtIcon from './components/icon'
import VtLink from './components/link'
import VtRow from './components/row'
import VtCol from './components/col'
import VtDiv from './components/div'
import VtTable from './components/table'
import VtConsole from './components/console'
import VtJson from './components/jsonv'
import VtMessage from './components/message'

const components = [
  VtAlert,
  VtButton,
  VtCard,
  VtIcon,
  VtLink,
  VtRow,
  VtCol,
  VtDiv,
  VtTable,
  VtConsole,
  VtJson,
  VtMessage
]

const install = function (app: App, opts = {}) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
  app.config.globalProperties.$msg = VtMessage
}

const VuetomUI = {
  name: 'VuetomUI',
  version: '0.2.5',
  install
}

export default VuetomUI

export {
  VtAlert,
  VtButton,
  VtCard,
  VtIcon,
  VtLink,
  VtRow,
  VtCol,
  VtDiv,
  VtTable,
  VtConsole,
  VtJson,
  VtMessage
}