const mdPlugin = require('./utils/plugins').mdPlugin

module.exports = {
  title: "Vuetom UI",
  base: "/",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
    ["link", { rel: "icon", href: "/logo/vuetom-logo.png" }],
    // 统计代码
    // [
    //   "script",
    //   { src: "" },
    // ],
    // 百度推送代码
    // [
    //   "script",
    //   { src: "/public/push.js" },
    // ],
  ],
  themeConfig: {
    repo: 'https://github.com/lauset/vuetom-ui',
    docsDir: 'docs',
    sidebar: getSidebar(),
    nav: getNav(),
    bgImg: '/imgs/homebg.jpg',
    bgColor: '0,0,0',
    bgOpacity: 0.6,
    flashEnable: true,
    flashColor: ['238,17,17', '0,98,255'],
    parallaxEnable: false,
    pageBgEnable: true,
    pageBgOpacity: 0.8,
    featuresColor: ['#06cdff30', 'rgba(223,7,107,.3)'],
    locales: {
      '/zh-CN/': {
        label: '简体中文',
        selectText: '多国语言'
      }
    }
  },
  locales: {
    '/zh-CN/': {
      lang: 'zh-CN',
      title: 'Vuetom 主题',
      description: '为 Vitepress 提供的一款主题'
    }
  },
  markdown: {
    lineNumbers: false,
    config: (md) => mdPlugin(md)
  },
  lastUpdated: true,
  scrollOffset: 20
};

function getSidebar() {
  return {
    '/guide/': {
      'zh-CN': [
        {
          text: "介绍",
          children: [
            { text: "什么是VuetomUI？", link: "/zh-CN/guide/info" },
            { text: "开始使用", link: "/zh-CN/guide/start" },
            { text: "框架目录", link: "/zh-CN/guide/prodir" },
          ],
        },
        {
          text: "开发",
          children: [
            { text: "开发说明", link: "/zh-CN/guide/dev" },
          ],
        }
      ]
    },
    '/menu/': {
      'zh-CN': [
        {
          text: "UI组件",
          children: [
            { text: "Alert", link: "/zh-CN/menu/alert" },
            { text: "Button", link: "/zh-CN/menu/button" },
            { text: "Card", link: "/zh-CN/menu/card" },
            // { text: "Message", link: "/zh-CN/menu/message" },
            { text: "Table", link: "/zh-CN/menu/table" }, 
            { text: "ConsoleT", link: "/zh-CN/menu/console" }, 
            { text: "JsonView", link: "/zh-CN/menu/jsonv" }, 
          ],
        }
      ]
    },
    '/power/': {
      'zh-CN': [
        {
          text: "样式与动画",
          children: [
            { text: "颜色", link: "/zh-CN/power/colors" },
            { text: "间距", link: "/zh-CN/power/spacing" },
            { text: "图标", link: "/zh-CN/power/icons" },
          ],
        }
      ]
    }
  }
}

function getNav() {
  return {
    'zh-CN': [
      { text: "介绍", link: "/zh-CN/guide/info", activeMatch: "/guide/" },
      { text: "组件", link: "/zh-CN/menu/", activeMatch: "/menu/" },
      { text: "样式", link: "/zh-CN/power/colors", activeMatch: "/power/" },
    ]
  }
}
