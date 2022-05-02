import { App } from 'vue'

// import './dist/styles/index.css'

// VuetomUI
import VtAlert from './components/alert'
import VtButton from './components/button'
import VtCard from './components/card'
import VtIcon from './components/icon'
import VtLink from './components/link'
import VtRow from './components/row'
import VtCol from './components/col'
import VtDiv from './components/div'
import VtTable from './components/table'

const components = [
  VtAlert,
  VtButton,
  VtCard,
  VtIcon,
  VtLink,
  VtRow,
  VtCol,
  VtDiv,
  VtTable
]

const install = function (app: App, opts = {}) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
  // app.config.globalProperties.$notify = Notification
}

const VuetomUI = {
  name: 'VuetomUI',
  version: '2.3.0',
  install,
  VtAlert,
  VtButton,
  VtCard,
  VtIcon,
  VtLink,
  VtRow,
  VtCol,
  VtDiv,
  VtTable
}

export default VuetomUI
