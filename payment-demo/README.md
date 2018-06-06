# 微信小程序支付 Demo

<p align="center"><img src="../assets/payment-demo.png" /></p>

通过这个 demo 你可以学到：

- 使用知晓云 BaaS JS SDK 一行代码搞定支付
- 一个简单的电商业务实现


### 使用这个 Demo

*Step 1:*

前往[知晓云](https://cloud.minapp.com) 创建账户，进入控制台完成小程序绑定。并通过控制台获取到 ClientID。

*Step 2:*
在微信小程序管理后台开通微信支付，并在知晓云管理后台“支付“模块配置相应证书。(关于开通微信支付功能，可查看[相关文档](https://doc.minapp.com/dashboard/payment.html) )

*Step 3:*

在控制台[数据管理](https://cloud.minapp.com/hydrogen/flex/schema/) 中找到 _userprofile 表，为其新增以下几个字段

| 字段       | 类型    | 示例 |
| --------- | ------- | --- |
| name      | String  | "钢铁侠" |
| phone     | String  | "10086" |
| company   | String  | "Boring company" |
| is_member | Boolean | true |

*Step 4:*

Clone 代码后，通过微信开发者工具添加项目；

将您自己的 ClientID, tableID 具体配置到项目目录下的 ``config`` 文件夹下的``config.js``。


**该示例使用了 open-data 展示用户头像和用户昵称，所以调试时，记得在微信开发者工具中把调试基础库升级到 1.9.90 或以上版本**
