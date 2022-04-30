import VtApp from './vt/vt-app.vue'
import VtDemo from './vt/vt-demo.vue'
import AlertBasic from './alert/alert-basic.vue'
import ButtonBasic from './button/btn-basic.vue'
import ButtonIcon from './button/btn-icon.vue'
import CardBasic from './card/card-basic.vue'
import ColorList from './styl/color-list.vue'
// import DialogBasic from './dialog/dialog-basic.vue'
import IconList from './styl/icon-list.vue'
// import MessageBasic from './message/message-basic.vue'
// import NotifBasic from './notification/notif-basic.vue'

export { default as NotFound } from './vt/vt-not-found.vue'
export default VtApp
export const globals = [
  ['Demo', VtDemo],
  ['AlertBasic', AlertBasic],
  ['ButtonBasic', ButtonBasic],
  ['ButtonIcon', ButtonIcon],
  ['CardBasic', CardBasic],
  ['ColorList', ColorList],
  // ['DialogBasic', DialogBasic],
  
  ['IconList', IconList],
  // ['MessageBasic', MessageBasic],
  // ['NotifBasic', NotifBasic]
]
