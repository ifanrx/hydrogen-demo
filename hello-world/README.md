# hello-world，书架小程序 Demo

<p align="center"><img src="../assets/hello-world.png" /></p>

使用知晓云 BaaS JS SDK 实现的书架微信小程序。
通过这个 demo 你可以学到：

- 基本的微信小程序开发，控件交互等；¯
- 使用 SDK 对后端数据进行基础的增删改查操作；
- 使用 SDK 进行用户登录及获取用户信息；


### 使用这个 demo

点击<a href="https://cloud.minapp.com/dashboard/?demo=bookshelf-demo" target="_blank">创建示例应用</a>，我们会帮您在知晓云完成应用、数据表、内容库的创建及示例数据的填充。（创建前请先完成登录）

*Step 1:*

你也可以手动这么做：
前往[知晓云](https://cloud.minapp.com) 创建账户，进入控制台完成小程序绑定。并通过控制台获取到 ClientID。

*Step 1.1:*
在控制台[数据管理](https://cloud.minapp.com/hydrogen/flex/schema/)创建一个新的数据表，添加一个类型为 String 的数据列：bookName。完成创建之后，在数据表界面的右侧帮助中心获取数据表 ID: tableID。

*Step 2:*

Clone 代码后，通过微信开发者工具添加项目。将您自己的 ClientID, tableID 替换代码中（app.js, index.js）的演示 ID，即可运行代码。

**该示例使用了 open-data 展示用户头像和用户昵称，所以调试时，记得在微信开发者工具中把调试基础库升级到 1.9.90 或以上版本**