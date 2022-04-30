const mdPlugin = require('./utils/plugins').mdPlugin

module.exports = {
  title: "Vuetom UI",
  base: "/",
  lang: "zh-CN",
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
  markdown: {
    lineNumbers: false,
    config: (md) => mdPlugin(md)
  },
  themeConfig: {
    smoothScroll: true,
    sidebar: {
      "/": getSidebar(),
    },
    author: "",
    nav: getNav(),
  },
};

function getSidebar() {
  return [
    {
      text: "介绍",
      children: [
        { text: "什么是VuetomUI？", link: "/guide/info" },
        { text: "开始使用", link: "/guide/start" },
        { text: "框架目录", link: "/guide/prodir" },
        { text: "常见问题", link: "/guide/question" },
      ],
    },
    {
      text: "UI组件",
      link: "/menu/",
      children: [
        { text: "Alert", link: "/menu/alert" },
        { text: "Button", link: "/menu/button" },
        { text: "Card", link: "/menu/card" },
        { text: "Dialog", link: "/menu/dialog" },
        { text: "Message", link: "/menu/message" },
        { text: "Notification", link: "/menu/notification" },
      ],
    },
    {
      text: "样式与动画",
      link: "/power/",
      children: [
        { text: "颜色", link: "/power/colors" },
        { text: "间距", link: "/power/spacing" },
        { text: "图标", link: "/power/icons" },
      ],
    },
    {
      text: "主题",
      link: "/color/",
    },
  ];
}

function getNav() {
  return [
    { text: "介绍", link: "/", activeMatch: "^/$|^/guide/" },
    { text: "组件", link: "/menu/", activeMatch: "/menu/" },
    { text: "样式", link: "/power/", activeMatch: "/power/" },
    { text: "留言", link: "/feedback/", activeMatch: "/feedback/" },
    {
      text: "GITHUB",
      link: "https://github.com/lauset/vuetom-ui",
    },
    { text: "更多地址", link: "/contact/", activeMatch: "/contact/" },
  ];
}
