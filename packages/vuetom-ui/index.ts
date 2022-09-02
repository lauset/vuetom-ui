import type { App, Plugin } from '@vue/runtime-core'

import VtAlert from '../components/alert'
import VtButton from '../components/button'
import VtCard from '../components/card'
import VtIcon from '../components/icon'
import VtLink from '../components/link'
import VtRow from '../components/row'
import VtCol from '../components/col'
import VtDiv from '../components/div'
import VtTable from '../components/table'
import VtConsole from '../components/console'
import VtJson from '../components/jsonv'
import VtMessage from '../components/message'

export * from '../components'

const version = '0.3.0'

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

const Installer = (components: any[]) => {
  const install = (app: App, opts = {}) => {
    components.forEach((c) => {
      app.use(c)
    })
    app.config.globalProperties.$msg = VtMessage
  }
  return {
    install 
  }
}

const installer = Installer(components)
const install = installer.install
const VuetomUI = {
  name: 'VuetomUI',
  version,
  install
}

export { install }
export default VuetomUI
