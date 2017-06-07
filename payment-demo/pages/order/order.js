import config from '../../config/config'

const app = getApp()
var page

Page({
  data: {
    img_order_checked: config.ROUTE.IMG.ORDER_CHECKED,
    img_order_unchecked: config.ROUTE.IMG.ORDER_UNCHECKED,
    isChecked: false,
    orderType: '',
  },
  onLoad: function(options) {

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

    if (orderType != 0) {
      // 测试支付金额
      let totalCost = 0.01
      let merchandiseDescription = '一分钱测试商品'

      let params = {
        totalCost,
        merchandiseDescription
      }

      wx.BaaS.pay(params)
        .then(res => {
          wx.BaaS.getRecordList({
            tableID: config.BAAS.TABLE_ID,
            created_by: wx.BaaS.storage.get('uid')
          }).then(res => {
            let recordID = res.data.objects[0].id

            wx.BaaS.updateRecord({
              tableID: config.BAAS.TABLE_ID,
              recordID: recordID,
              data: {
                is_member: true
              }
            })
            wx.navigateTo({
              url: '/pages/index/index'
            })
            console.log('支付成功', res)
          })
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
