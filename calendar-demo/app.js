//app.js
const config = require('./config/config.js')

App({
  onLaunch: function () {
    wx.BaaS = requirePlugin('sdkPlugin')
    wx.BaaS.wxExtend(wx.login, wx.getUserInfo, wx.requestPayment) //让插件帮助完成登录、支付等功能
    wx.BaaS.init(config.BAAS_CLIENT_ID)
  },
  globalData: {}
})