//app.js
App({
  onLaunch: function () {
    wx.BaaS = requirePlugin('sdkPlugin')
    wx.BaaS.wxExtend(wx.login, wx.getUserInfo, wx.requestPayment) //让插件帮助完成登录、支付等功能
    wx.BaaS.init('849144d9131d00651021')
  },
  globalData: {}
})