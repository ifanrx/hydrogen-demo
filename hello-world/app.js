//app.js
App({
  onLaunch: function() {
    let that = this

    // 引入 BaaS SDK
    require('./utils/sdk-v1.4.0')


    let clientId = this.globalData.clientId

    wx.BaaS.init(clientId)
  },

  globalData: {
    clientId: '', // 从 BaaS 后台获取 ClientID
    tableId: null, // 从 https://cloud.minapp.com/dashboard/ 管理后台的数据表中获取
  }
})
