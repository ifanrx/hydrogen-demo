# 知晓云微信小程序 Demo

我们在这里准备了三个使用[知晓云](https://cloud.minapp.com) BaaS JS SDK 开发的微信小程序 Demo。  
它们分别是：

- hello-world：简易的书架 app，演示了基本的用户登录、数据表操作
- lbs-demo：地图黄页 demo，演示了稍微复杂的业务实现
- payment-demo：支付相关的 demo，演示了 SDK 的在线支付的特性支持


## hello-world，书架小程序 Demo

![](assets/hello-world.png)

使用知晓云 BaaS JS SDK 实现的书架微信小程序。  
通过这个 Demo 你可以学到：

- 基本的微信小程序开发，控件交互等；
- 使用 SDK 对后端数据进行基础的增删改查操作；
- 使用 SDK 进行用户登录及获取用户信息；

### 使用这个 Demo

*Step 1:*

前往[知晓云](https://cloud.minapp.com) 创建账户，进入控制台完成小程序绑定。并通过控制台获取到 ClientID。

*Step 1.1:*
在控制台[数据管理](https://cloud.minapp.com/hydrogen/flex/schema/)创建一个新的数据表，添加一个类型为 String 的数据列：bookName。完成创建之后，在数据表界面的右侧帮助中心获取数据表 ID: tableID。

*Step 2:*

Clone 代码后，通过微信开发者工具添加项目。将您自己的 ClientID, tableID 替换代码中（app.js, index.js）的演示 ID，即可运行代码。

## lbs-demo，地图黄页 app

![](assets/lbs-demo.png)

通过这个 Demo 你可以学到：

- 更加丰富的微信小程序控件使用；
- LBS 业务中微信小程序地图控件的使用；
- 知晓云 BaaS JS SDK 多数据表协作实现复杂逻辑；

## payment-demo，微信小程序支付 Demo

![](assets/payment-demo.png)

通过这个 Demo 你可以学到：

- 使用知晓云 BaaS JS SDK 一行代码搞定支付
- 一个简单的电商业务实现
