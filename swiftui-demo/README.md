# 新手入门

## 简介

知晓云是个好用、顺手的开发工具。它免去了小程序开发中服务器搭建、域名备案、数据接口实现等繁琐流程。让您专注于业务逻辑的实现，使用知晓云开发 `APP` 应用，门槛更低，效率更高。

`SwiftUI` 是苹果最新推出 `UI` 开发工具，其具有以下特点：采用声明式语法，易于阅读、代码更少；跨所有苹果平台，共用一套 API；自动支持动态类型、暗黑模式、本地化等。采用 `SwiftUI` 将大大提高 `UI` 界面开发效率。

使用知晓云和 `SwiftUI`，能够帮助您更快速创建一款 `iOS` 应用。 

**新手入门**章节将会带领大家如何**从零开始**将知晓云接入 `SwiftUI` 应用中。

在本章节中，你将会学到以下内容：

- 知晓云账号注册，创建数据表

- 了解知晓云 `MinCloud iOS SDK` 的使用

- 使用 `SwiftUI` 创建一个接入 `MinCloud` 的 `iOS` 应用

## 知晓云账号注册

### 注册并完成相关信息绑定

前往[知晓云](https://cloud.minapp.com/)注册知晓云账号。

成功注册后，页面将跳转至控制台，需要用户进一步完成**邮箱激活验证**和**企业信息设置**等步骤。

完成以上步骤，即可进入知晓云控制台 `dashboard` 页。

>**danger**
> 如果注册或邮件激活失败，请开发者根据失败提示进行后续操作。如果开发者认为是服务提供方方面导致的失败，请邮件联系 `mincloud@ifanr.com`，我们会第一时间处理您的邮件。

## 书架 Demo

`BookShelf` 是一个简单的书架应用，以列表形式展示了存储在知晓云数据表中所有的书籍信息，点击每个书籍项，将跳转到书籍详情页。

我们以 `BookShelf` 为例，讲解如何在 `iOS` 中接入知晓云 `SDK`。示例代码可以在[这里]()下载，建议下载代码，一步一步跟着做。

### 创建数据表

我们根据自身应用的业务逻辑，确定所需的数据表，确定好后即可在**知晓云后台 >> 数据管理模块**开始数据表的创建工作。

在**书架**应用中，我们将创建一张名为 `bookshelf` 的数据表。打开数据管理模块

![创建表](/images/newbies/table-creation.jpeg)

添加一个名为 `bookName` 的数据列

![添加列](/images/newbies/column-addition.jpeg)

以同样的方式创建以下列：

| 列名   |  类型    |  说明  |
| :---  | :-----  | :----  |
| bookName | string  | 书名  |
| bookPrice | number  | 价格  |
| bookAuthor |  string | 作者 |
| bookContent | string | 内容 |
| coverUrl | string | 封面链接 |

### `MinCloud` 安装与配置

通过 `Cocoapods`，完成安装 `MinCloud`，在 `BookShelf` 工程目录下，新建 `Podfile` 文件，并输入以下内容：

```
platform :ios, '9.0'
use_frameworks!

target 'MinCloud' do
    pod 'MinCloud', :git => 'https://github.com/ifanrx/hydrogen-ios-sdk.git'
end
```

在**终端**进入项目根目录，并执行以下命令，完成安装：
```
pod install
```

### 初始化 `MinCloud`
在应用启动时，需要注册知晓云 `clientId`，即在 `AppDelegate.swift` 文件中，导入 `MinCloud`，并找到 `application:didFinishLaunchingWithOptions` 方法，插入下面代码： 示例代码

```
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        
    BaaS.register(clientID: "fdc4feb5403a985fe681")
        return true
}
```

将 `clientID` 替换成你的应用 `ID`，`clientID` 可在 dashboard [设置-应用页](https://cloud.minapp.com/dashboard/#/app/settings/info/)中获取）。

![复制 clientID](/images/newbies/get-client-id.png)

### 使用 `MinCloud` 获取书籍列表

通过上面的步骤完成了数据表的创建和 `MinCloud` 安装和初始化，接下来就可以通过 `MinCloud` 的 `API` 操作知晓云数据表了。

#### Book

`Book` 类，表示书籍信息，和数据表 `bookshelf` 的记录信息对应。`Book` 的属性如下：
```
struct Book: Identifiable {
    let id: String
    var name: String
    var author: String
    var price: Float
    var content: String
    var coverUrl: String
}
```

#### BookStore

* 创建 `Table` 对象

`Table` 对应于知晓云的数据表，操作该对象即相当于操作知晓云对应的数据表。打开 `BookStore.swift` 文件，导入 `MinCloud`。为 `BookStore` 类增加一个属性：bookshelfTable。`bookshelfTable` 是一个 `Table` 对象，关联数据表 `bookshelf`。

```
let bookshelfTable = Table(name: "bookshelf")
```

* 获取数据表 `bookshelf` 的书籍信息

接下来我们可以通过 `bookshelfTable` 来操作数据表。实现 `BookStore` 类的方法 `fetch()`，该方法从知晓云数据表 `bookshelf` 请求书籍信息，并保存到 `books`中。具体实现如下：
```
func fetch() {
        
    // 从 bookshelf 表获取书籍列表
    bookshelfTable.find { (recordList, error) in
        var books: [Book] = []
        recordList?.records?.forEach({ (record) in
            let id = record.Id!
            let name = record.get(key: "bookName") as! String
            let author = record.get(key: "bookAuthor") as! String
            let price = record.get(key: "bookPrice") as! Float
            let content = record.get(key: "bookContent") as! String
            let coverUrl = record.get(key: "coverUrl") as! String
            let book = Book(id: id, name: name, author: author, price: price, content: content, coverUrl: coverUrl)
                books.append(book)
        })
        DispatchQueue.main.async {
            self.books = books
        }
    }
}
```

其中，`BookStore` 是一个可观察对象 `ObservableObject`。`BookList` 为书籍列表界面，为了能显示书籍信息，在该类创建一个 `BookStore` 实例，命名为 `store`，并声明 `store` 为 `@ObservedObject` 观察对象，这就完成了数据和界面的绑定，即每当 `store.books` 有变化时，系统会自动根据 `store.books` 新的数据来更新 `BookList`。无需手动去更新相关的界面。更多关于 `SwiftUI` 的使用，请查阅 [SwiftUI](https://developer.apple.com/xcode/swiftui/)

至此，通过 `SwiftUI` 接入 `MinCloud` 的简单应用，已经完成了，完整的代码可以从[这里]()下载。

## 最后

通过这个简单的上手 `demo`，我们已经学会了知晓云注册、`iOS` 应用接入 `MinCloud`。希望进一步了解 `MinCloud iOS SDK`，可以点击[这里]()。

