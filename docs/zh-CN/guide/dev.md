# 开发说明

该UI框架可以看作一个IU框架的开发模版

大家可以拉取该项目至各自的本地，对组件内容进行新增或修改后进行打包来实现属于自己的UI库

**docs** : 该目录是说明文档

**src/components** : 主要的组件都写在这里，样式也可以单独分离


### 打包命令

`npm run b`: 开发环境打包，不会压缩js内容、方便查阅

`npm run build`: 线上环境打包、会压缩js内容

`npm run build:umd` : 打包为umd格式js

`npm run build:esm` : 打包为esm格式js