import config from './config/config'
//app.js
App({

  onLaunch() {
    // 引入 BaaS SDK
    wx.BaaS = requirePlugin('sdkPlugin')

    wx.BaaS.wxExtend(wx.login,
      wx.getUserInfo,
      wx.requestPayment)

    let clientID = '知晓云管理后台获取到的 ClientID'
    wx.BaaS.init(clientID, {autoLogin: true})
  },
})