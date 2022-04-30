import DefaultTheme from "vitepress/theme";
import VtApp, { globals, NotFound } from '../views'
import VuetomUI from 'vuetom-ui'
import 'vuetom-ui/dist/vuetom-ui.css'
import './css/vdoing.css'

export default {
  ...DefaultTheme,
  NotFound,
  // Layout: VtApp,
  enhanceApp({ app }) {
    app.use(VuetomUI);
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
};
