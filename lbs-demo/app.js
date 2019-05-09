import config from '/config/config'
//app.js
App({

  onLaunch: function() {

    // 引入 BaaS SDK
    wx.BaaS = requirePlugin('sdkPlugin')

    wx.BaaS.wxExtend(wx.login,
      wx.getUserInfo,
      wx.requestPayment)

    wx.BaaS.init(config.BAAS_CLIENT_ID)

    if (!this.userID) {
      wx.BaaS.auth.getCurrentUser().then(user => {
        this.userID = user.get('id')
      }).catch(err => {
        wx.BaaS.auth.loginWithWechat().then(user => {
          this.userID = user.get('id')
        })
      })
    }
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