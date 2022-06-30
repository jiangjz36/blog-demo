## 项目描述
该项目为个人博客项目。记录日常生活，总结开发经验，加强编程技能。

## 技术栈
1. 服务端使用node进行开发
2. 使用mongodb作为数据库
3. 用react框架开发前端页面和管理平台页面
4. 使用typescript作为主开发语言

## 开发环境启动方式
1. 如果启用server.ts中的`app.use(express.static('static'));`, 需要同时启动一下两个，（已弃用）
服务端 `npm run dev:node`
客户端 `npm run dev:serve`

2. 如果启用server.ts中的`app.use(serverRender);`，即开启由服务器端渲染页面，不需要另外启动客户端
只需要启动 `npm run dev:node`