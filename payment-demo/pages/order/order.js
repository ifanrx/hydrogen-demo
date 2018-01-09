import config from '../../config/config'
import utils from '../../utils/index'
const app = getApp()
var page

Page({
  data: {
    img_order_checked: config.ROUTE.IMG.ORDER_CHECKED,
    img_order_unchecked: config.ROUTE.IMG.ORDER_UNCHECKED,
    isChecked: false,
    orderType: '',
    merchandiseRecordID: null,
  },

  onLoad: function(options) {
    let self = this
    let uid = app.getUserID()

    if (!uid) {
      wx.showModal({
        title: '您还未登录哟...',
        content: '请到主页重新授权并登录',
        showCancel: false,
        confirmText: '好的',
        confirmColor: '#FD544A',
        success() {
          wx.navigateBack()
        }
      })
    } else {
      wx.BaaS.getRecordList({
        tableID: config.BAAS.TABLE_ID,
        created_by: wx.BaaS.storage.get('uid')
      }).then(res => {
        let merchandiseRecordID = res.data.objects[0].id
        self.setData({merchandiseRecordID})
      })

      utils.getUserProfile(this, (res) => {
        let merchandiseRecordID = res.data.objects[0].id
        self.setData({merchandiseRecordID})
      })
    }

  },

  orderChecked(e) {

    let orderType = e.currentTarget.dataset.orderType

    this.setData({
      orderType,
    })
  },

  payOrder(e) {

    let orderType = this.data.orderType
    let merchandiseRecordID = this.data.merchandiseRecordID
    if (merchandiseRecordID == null) {
      wx.showModal({
        title: "糟糕，还没完善资料",
        content: "请前往个人资料页填写资料后再来购买。",
        showCancel: false,
        confirmText: '好',
        confirmColor: '#FD544A'
      })
      return 
    }

    if (orderType != 0) {
      // 测试支付金额
      let totalCost = 0.01
      let merchandiseDescription = '一分钱测试商品'
      let merchandiseSchemaID = config.BAAS.TABLE_ID


      let params = {
        totalCost,
        merchandiseDescription,
        merchandiseSchemaID, // 这里是付款对应的那张表，不一定是商品，比如在这里，它是用户注册表，可以看到有比较大的自由度
        merchandiseRecordID  // 付款对应的那条记录，在这里，它是当前用户注册的记录，完成支付后，在后台订单页就可以看到对应关系
      }


      wx.BaaS.pay(params)
        .then(res => {

          utils.updateUser({
            recordId: merchandiseRecordID,
            is_member: true
          }, this)
  
          wx.navigateTo({
            url: '/pages/index/index'
          })
          console.log('支付成功', res)
        }, err => {
          console.log('支付失败', err)
        })
    } else {
      wx.showModal({
        title: "糟糕，无法完成购买",
        content: "还没有选择会员时长呢。",
        showCancel: false,
        confirmText: '好',
        confirmColor: '#FD544A'
      })
    }
  }
})
