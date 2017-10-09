//app.js
App({
  onLaunch: function() {
    let that = this

    // 引入 BaaS SDK
    require('./utils/sdk-v1.1.0')

  
    let clientId = this.globalData.clientId

    wx.BaaS.init(clientId)

    let userId = this.getUserId()
    if (!userId) {
      wx.BaaS.login()
        .then(res => {
          console.log('BaaS is logined!')
        }).catch(err => {
          console.dir(err)
        })
    }
  },

  globalData: {
    clientId: '', // 从 BaaS 后台获取 ClientID
    tableId: null, // 从 https://cloud.minapp.com/dashboard/ 管理后台的数据表中获取
  },

  getUserId() {
    if (this.userId) {
      return this.userId
    }

    this.userId = wx.BaaS.storage.get('uid')
    return this.userId
  },

  getUserInfo() {
    if (this.userInfo) {
      return this.userInfo
    }

    this.userInfo = wx.BaaS.storage.get('userinfo')
    return this.userInfo
  }
})
