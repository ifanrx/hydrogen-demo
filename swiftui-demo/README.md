# SwiftUI-demo

<p align="center"><img src="../assets/swiftui-bookshelf.png" width = "250"/></p>

使用知晓云 MinCloud SDK 和 SwiftUI 实现书架列表 app。
通过这个 demo 你可以学到：

- 使用 SDK 对后端数据进行基础查询
- 简单使用 SwiftUI

## Requirements
* iOS 9.0+
* Xcode 11.0+
* Swift 4.2+


## 直接使用 demo
*Step 1* 从 github 上 clone 代码：
```
git clone https://github.com/ifanrx/hydrogen-demo.git
```

*Step 2* 进入项目目录：
```
cd swiftui-demo
```

*Step 3* 安装 MinCloud SDK：
```
pod install
```

接着运行项目。

## 从零开始搭建 demo

*Step 1*

前往[知晓云](https://cloud.minapp.com) 创建账户，进入控制台完成小程序绑定。并通过控制台获取到 ClientID。

*Step 1.1*
在控制台[数据管理](https://cloud.minapp.com/hydrogen/flex/schema/)创建一个新的数据表，命名为 bookshelf。
在数据表中，添加以下属性：
| 名称 | 类型 | 说明 |
| :---- | :----- | :---- |
| name| string | 书名 |
| price | float  | 价格 |
| author | string | 作者 |
| coverUrl | string | 封面 url |
| content | string | 内容 |

*Step 2* 安装 SDK

创建 SwiftUI 项目，在 `Podfile` 文件中添加以下代码

```
platform :ios, '9.0'
use_frameworks!

target 'YOUR_APP_TARGET' do # 替换 YOUR_APP_TARGET 为你的应用名称。
    pod 'MinCloud', git: => 'https://github.com/ifanrx/hydrogen-ios-sdk.git'
end
```

进入终端，在项目根目录下，执行以下命令：

```
pod install
```

*Step 3* 使用 MinCloud

1. 登记知晓云 ClientID

 在AppDelegate.swift 文件的 `application:launchOptions:` 方法中添加以下代码
 ```
 BaaS.register(clientID: "xxxx")
 ```

2. 在需要使用知晓云的文件中导入 MinCloud
```
import MinCloud
```

接着可参考 `swiftui-demo` 完成用 SwiftUI 和 MinCloud 来完成 demo 的创建。
