# ios-sdk-demo，书架 Demo

<p align="center"><img src="../assets/ios-sdk-demo.png" width = "250"/></p>

使用知晓云 BaaS iOS SDK 实现书架 app。
通过这个 demo 你可以学到：

- 使用 SDK 对后端数据进行基础的增删改查操作；
- 使用 SDK 进行用户注册登录及登出，获取用户信息；

### 使用这个 demo

点击<a href="https://cloud.minapp.com/dashboard/?demo=bookshelf-demo" target="_blank">创建示例应用</a>，我们会帮您在知晓云完成应用、数据表、内容库的创建及示例数据的填充。（创建前请先完成登录）

你也可以手动这么做：

*Step 1:*

前往[知晓云](https://cloud.minapp.com) 创建账户，进入控制台完成小程序绑定。并通过控制台获取到 ClientID。

*Step 1.1:*
在控制台[数据管理](https://cloud.minapp.com/hydrogen/flex/schema/)创建一个新的数据表，添加一个类型为 String 的数据列：bookName。完成创建之后，在数据表界面的右侧帮助中心获取数据表的名字: tableName。

*Step 2:*

Clone 代码后，在 `Podfile` 文件中添加以下代码

```
platform :ios, '9.0'
use_frameworks!

target 'YOUR_APP_TARGET' do # 替换 YOUR_APP_TARGET 为你的应用名称。
    pod 'MinCloud'
end
```

安装 SDK:

```
pod install
```
*Step 2.1:*

将您自己的 ClientID, tableName 替换代码中的演示 ClienID 和 tableName，即可运行代码。

ClientID 位于 AppDelegate.swift 文件的 `application:launchOptions:` 方法中。

tableName 位于 ViewController.swift 文件中。
