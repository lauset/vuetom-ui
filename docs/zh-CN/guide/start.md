--- 
title: 开始使用 VuetomUI
head:
  - - meta
    - name: description
      content: vuetom ui 开始使用，教你如何掌握框架的工作流程，快速上手。
  - - meta
    - name: keywords
      content: vuetom ui quickstart
---

# 开始使用

请确保 vue 版本为 `3+`，那么让我们快速体验一下吧

## **1.** 安装所需依赖

在需要安装的文件夹下，打开终端，输入以下命令

```shell
npm install vuetom-ui --save
```

## **2.** 在 main.js 中引用

全局引入UI组件和样式文件

```js{5-6,9}
import { createApp } from 'vue'
import App from './App.vue'

// vuetom ui
import VuetomUI from 'vuetom-ui'
import 'vuetom-ui/dist/vuetom-ui.css'

createApp(App)
  .use(VuetomUI)
  .mount('#app')
```

## **3.** 启动项目

在页面中使用一下 vt-button 按钮组件并启动项目吧

```html
<vt-button type="primary" size="macos">macos</vt-button>
```

## 推荐开发工具

这个其实就无所谓了，但是前端可以选择vscode

[vscode编辑器](https://code.visualstudio.com/)
