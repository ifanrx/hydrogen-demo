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

## 使用这个 Demo

*Step 1:*

前往[知晓云](https://cloud.minapp.com) 创建账户，进入控制台完成小程序绑定。并通过控制台获取到 ClientID。

*Step 2:*

在控制台[数据管理](https://cloud.minapp.com/hydrogen/flex/schema/)创建一个新的数据表，命名为 company，表的结构如下：

字段 | 类型 | 示例
--- | --- | ---
title | string | 爱范儿
address | string | 品牌街5号
description | string | 爱范儿(证券代码 839758)是一家聚焦于微信及移动互联网生态的 综合服务商，拥有多个知名互联网品牌。爱范儿洞察科技及互联网趋势，关注新消费模式与时尚生活动向，在新媒体及微信生态服务领域深度布局，连接海量「趋势消费者」，提供从内容到营销到技术平台的一体化微信生态解决方案
logo | string | https://media.ifanrusercontent.com/media/tit/atGxbqTGjzYkQOER.jpgd
image | array | ["https://media.ifanrusercontent.com/media/tit/TyjAFWdpYzvklnEn.jpg" , "https://media.ifanrusercontent.com/media/tit/OnKDjKhqzlXDzoFu.jpg"]
phone | string | 89054207
latitude | number | 23.099532
longitude | number | 113.323882
category | array | ["科技IT	"]
priority | integer | 4

详细的数据返回实例请参考项目目录下的 ``mock`` 文件夹下的 ``mock.js``。

*Step 3:*

Clone 代码后，通过微信开发者工具添加项目；

将您自己的 ClientID, tableID 替换代码中（app.js, index.js）的演示 ID，具体配置到项目目录下的 ``config`` 文件夹下的``config.js``；

lbs-demo 涉及地图接口的调用，本 demo 使用[高德地图的小程序 SDK](https://lbs.amap.com/api/wx/gettingstarted)，需要自行申请高德地图的开发 key，并将其配置项目目录下的 ``config`` 文件夹下的``config.js``；

完成上述操作，即可运行代码。

## payment-demo，微信小程序支付 Demo

![](assets/payment-demo.png)

通过这个 Demo 你可以学到：

- 使用知晓云 BaaS JS SDK 一行代码搞定支付
- 一个简单的电商业务实现
