//app.js
App({
  onLaunch: function() {
    // 引入 BaaS SDK
    wx.BaaS = requirePlugin('sdkPlugin')

    wx.BaaS.wxExtend(wx.login,
      wx.getUserInfo,
      wx.requestPayment)

    let clientID = '知晓云管理后台获取到的 ClientID'
    wx.BaaS.init(clientID)
  },

  globalData: {
    clientId: '', // 从 BaaS 后台获取 ClientID
    tableId: null, // 从 https://cloud.minapp.com/dashboard/ 管理后台的数据表中获取
  }
})
