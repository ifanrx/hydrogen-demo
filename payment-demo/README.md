# 微信小程序支付 Demo

<p align="center"><img src="../assets/payment-demo.png" /></p>

通过这个 Demo 你可以学到：

- 使用知晓云 BaaS JS SDK 一行代码搞定支付
- 一个简单的电商业务实现


### 使用这个 Demo

*Step 1:*

前往[知晓云](https://cloud.minapp.com) 创建账户，进入控制台完成小程序绑定。并通过控制台获取到 ClientID。

*Step 2:*
在微信小程序管理后台开通微信支付，并在知晓云管理后台“支付“模块配置相应证书。

*Step 3:*

在控制台[数据管理](https://cloud.minapp.com/hydrogen/flex/schema/) 中找到 _userprofile 表，为其新增一个 is_member 列，类型为 boolean。

*Step 4:*

Clone 代码后，通过微信开发者工具添加项目；

将您自己的 ClientID, tableID 具体配置到项目目录下的 ``config`` 文件夹下的``config.js``。