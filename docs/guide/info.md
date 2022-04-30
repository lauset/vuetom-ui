# 什么是VuetomUI

vuetom-ui 是建立在Vue3之上的界面框架。适用于一些 web 项目的UI界面开发。其推出目的是为了让开发人员体验并使用到不同风格的UI框架，进而可以来为客户展示出优美的扁平化界面效果。

## 有什么特点

使用现代扁平化的设计风格，并且接近于 macos 界面风格

该UI框架使用了以下相关技术

- [nodejs](http://nodejs.cn/)
- [git](https://git-scm.com/)
- [webpack](https://webpack.docschina.org/)
- [react](https://react.docschina.org/),[react-router-cache-route](https://github.com/CJY0208/react-router-cache-route),[redux](https://www.redux.org.cn/)
- [axios](http://www.axios-js.com/)

包含了各式各样的功能模块

**UI组件:** 扁平化数据组织，方便编写。含有按钮，弹框，卡片等组件

**样式与动画:** 主要包含布局，间距，排版，颜色，边框

**API与指令:** 可搭配组件使用，实现不同组件不同指令效果

## 优化

使用了[@loadable/component](https://loadable-components.com/docs/getting-started/)插件，对页面,组件进行懒加载，解决了首次打开页面加载过慢问题。

```js
// 页面
import loadable from "@loadable/component";

const PageErr = loadable(() => import("@pages/err"));

// 过大的组件
const FreeDnd = loadable(() => import("@/components/dnd/free"));
```

路由自动化:使用了[webpack-router-generator](https://www.npmjs.com/package/webpack-router-generator)来直接在定义页面里定义路由信息。

```js
// ./src/pages/test.js
export default function Test(props) {
  return (
    <div>
      Hello world!
      {props.msg}
    </div>
  );
}

Test.route = { title: "测试", path: "/test", key: "test" };
// or
export const route = { title: "测试", path: "/test", key: "test" };
```
