//app.js
App({
  onLaunch: function() {
    // 引入 BaaS SDK
    require('./utils/sdk-wechat.dev.js')
    // wx.BaaS = requirePlugin('sdkPlugin')

    let clientId = this.globalData.clientId
    wx.BaaS.init(clientId, {
      autoLogin: true,
    })
  },

  globalData: {
    clientId: '', // 从 BaaS 后台获取 ClientID
    tableName: 'bookshelf', // 从 https://cloud.minapp.com/dashboard/ 管理后台的数据表中获取
  }
})
