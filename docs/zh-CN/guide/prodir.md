--- 
title: 框架目录
head:
  - - meta
    - name: description
      content: VuetomUI 框架目录结构
  - - meta
    - name: keywords
      content: project dir
---

# 框架目录

在使用一个框架，其实也要简单了解下该框架的项目文件结构，请向下看吧。

```bash
.
├─ dist              编译后的UI文件    文件夹
├─ docs              UI文档           文件夹
├─ src               UI源代码         文件夹
├─ types             d.ts规范描述      文件夹
├─ .eslintrc         ESlint配置       文件
├─ .gitignore        git忽略配置       文件
├─ rollup.config     代码构建脚本       文件
├─ LICENSE           项目开源协议       文件
├─ README.md         使用文档          文件
└─ package.json      管理文件          文件
```

接下来看下**src**文件夹

```bash
src
 ├─ components      组件源码
 │    ├─ theme      部分组件样式
 │    └─ gulpfile   样式构建脚本
 │ 
 ├─ utils           工具包
 └─ index.js        项目主入口
```

## 开发内容

| 功能组件 | 开发进度 | 预估 |
| - | - | - |
| 按钮(vt-button) | 100% | ✅ |
| 卡片(vt-card) | 100% | ✅ |
| 布局(vt-row、vt-col) | 100% | ✅ |
| 表格（vt-table） | 100% | ✅ |  
| 消息提示（vt-message） | 100% | ✅ |
| 模拟终端（vt-console） | 100% | ✅ |
| JSON展示（vt-json）| 100% | ✅ |
| 其他 | 待开发（0%） | -月 |
