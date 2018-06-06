import config from '../../config/config'

const app = getApp()
Page({
  data: {
    userInfo: ''
  },

  onLoad: function () {
    let MyUser = new wx.BaaS.User()
    MyUser.get(wx.BaaS.storage.get('uid')).then(res => {
      wx.setStorageSync('userInfo', res.data)
      this.setData({
        userInfo: res.data,
      })
    })
  },

  // 表单输入操作
  input_name(e) {
    let that = this
    this.throttle(() => {
      let newUserInfo = that.data.userInfo
      newUserInfo.name = e.detail.value
      that.setData({
        userInfo: newUserInfo
      })
    }, this)
  },

  input_phone(e) {
    let that = this
    this.throttle(() => {
      let newUserInfo = that.data.userInfo
      newUserInfo.phone = e.detail.value
      that.setData({
        userInfo: newUserInfo
      })
    }, this)
  },

  input_company(e) {
    let that = this
    this.throttle(() => {
      let newUserInfo = that.data.userInfo
      newUserInfo.company = e.detail.value
      that.setData({
        userInfo: newUserInfo
      })
    }, this)
  },

  submit(e) {
    wx.showNavigationBarLoading()
    let { name, phone, company } = this.data.userInfo

    if (name && phone && company) {
      let info = {
        name,
        phone,
        company,
      }

      let MyUser = new wx.BaaS.User()
      var currentUser = MyUser.getCurrentUserWithoutData()
      currentUser.set(info).update().then(res => {
        wx.hideNavigationBarLoading()
        wx.navigateTo({
          url: config.ROUTE.PAGE.INDEX
        })
      }).catch(err => {
        wx.hideNavigationBarLoading()
        wx.showModal({
          title: "啊咧！资料保存出错了。",
          content: "大概是网络不太顺畅，可以稍后再尝试一下。",
          showCancel: false,
          confirmText: '好',
          confirmColor: '#FD544A'
        })
      })
    } else {
      wx.hideNavigationBarLoading()
      wx.showModal({
        title: '资料木有齐全',
        content: '请确保信息完整',
        showCancel: false,
        confirmText: '好的',
        confirmColor: '#FD544A'
      })
    }
  },

  throttle(method, context) {
    clearTimeout(this.data.timeout)
    this.setData({
      timeout: setTimeout(function () {
        method.call(context)
      }, 300)
    })
  }
})
