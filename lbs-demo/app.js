import config from '/config/config'
//app.js
App({

  onLaunch: function() {

    let that = this

    require('./utils/sdk-v1.1.0')
    // 完成BaaS的验证和登录
    wx.BaaS.init(config.BAAS_CLIENT_ID)
    const userId = this.getUserId()

    if (!userId) {
      wx.BaaS.login()
        .then(res => {
          console.log('BaaS is logined...')
        }).catch(err => {
          console.log(err)
        })
    }
  },

  getUserId() {
    if (this.userId) {
      return this.userId
    }

    const userId = wx.BaaS.storage.get('uid')
    this.userId = userId

    return userId
  },

  navToHome() {
    const currentPages = getCurrentPages();
    const currentPagesLen = currentPages.length;
    console.log(currentPages)

    if (currentPagesLen === 1) {
      wx.redirectTo({
        url: config.ROUTE.NAVIGATOR,
      });
    } else {
      wx.navigateBack({
        delta: currentPagesLen
      });
    }
  },

})