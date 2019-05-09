import config from '../../config/config'
const app = getApp()
var page

Page({
  data: {
    img_order_checked: config.ROUTE.IMG.ORDER_CHECKED,
    img_order_unchecked: config.ROUTE.IMG.ORDER_UNCHECKED,
    isChecked: false,
    orderType: '',
    merchandiseRecordID: null,
    isAuthoried: false,
  },

  onLoad: function(options) {
    let self = this

    let MyUser = new wx.BaaS.User()
    wx.BaaS.auth.getCurrentUser().then(user => {
      MyUser.get(user.get('id')).then(res => {
        self.setData({
          merchandiseRecordID: res.data.id
        })
      })
    })

    if (wx.BaaS.storage.get('userinfo')) {
      this.setData({
        isAuthoried: true,
      })
    }
  },

  userInfoHandler(data) {
    wx.BaaS.auth.loginWithWechat(data).then(res => {
      this.setData({
        isAuthoried: true,
      })
    })
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


      let params = {
        totalCost,
        merchandiseDescription,
        merchandiseRecordID  // 付款对应的那条记录，在这里，它是当前用户注册的记录，完成支付后，在后台订单页就可以看到对应关系
      }

      wx.BaaS.pay(params).then(res => {
        let MyUser = new wx.BaaS.User()
        let currentUser = MyUser.getCurrentUserWithoutData()
        currentUser.set('is_member', true).update()  // 需要先在 _userprofile 表中添加 is_member 字段，类型为 bool
        wx.navigateTo({
          url: config.ROUTE.PAGE.INDEX
        })
      }, err => {
        if(err.code === 603) {
          wx.openSetting()
        }
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
