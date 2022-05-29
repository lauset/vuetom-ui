import VuetomTheme from "vitepress-theme-vuetom"
import { globals } from '../views'
import './css/vdoing.css'
// import VuetomUI from '../../../src'
// import VuetomUI from 'vuetom-ui'
import 'vuetom-ui/dist/vuetom-ui.css'

export default {
  ...VuetomTheme,
  enhanceApp({ app }) {
    // app.use(VuetomUI);
    app.mixin({
      mounted() {
        console.log(234);
          import('vuetom-ui').then(function (m) {
            app.use(m.default)
          })
      },
  })
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
};
