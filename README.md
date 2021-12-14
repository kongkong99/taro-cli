# taro-js-cli
taro js版本的脚手架。含有完善的基础配置
`taro` + `taro-ui` + `scss` + `react` + `mobx` + `axios` + `mock`
> 注：taro-ui自定义主题功能需要使用scss, taro是以750设计稿写的px（暂没有相关配置），因此设计稿要采用750px的
> 1px 边框使用 1PX
> 上拉刷新，下拉加载使用 taro 的 ScrollView 组件

## 启动taro服务命令
```bash
# 全局安装 taro 命令
npm install -g @tarojs/cli

# 安装依赖
npm install

# 启动taro服务
npm run dev:h5

# 打包
npm run build:h5
```

## 启动 mock 在线服务
```bash
cd mock # 或者在 mockServer 目录下启动终端 

npm install

# 启动mock在线服务(port: 9000) 如果报错，则说明服务已经启动or端口被占用
npm start

# 关闭mock服务
npm run delete
```

## 目录结构
```bash
config # 配置文件
|-- dev.js # 开发环境
|-- prod.js # 正式环境
|-- index.js
mockServer # mock在线服务
|-- src
    |-- api # 接口文件
src
|-- api # 接口交互模块
|-- assets  # 图片，字体等资源
|-- components  # 公共组件
|-- config # 配置变量
|-- store   # mobx
|-- styles # 全局样式
|-- utils # 工具函数
|-- views   # 视图组件
|-- app.config.js # 配置文件，含router等
|-- app.js   # 入口js
```