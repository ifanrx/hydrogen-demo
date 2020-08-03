const CLIENT_ID = 'a4d2d62965ddb57fa4d6'
const ENV = 'f1eeb28c9552d4c83df1'

//app.js
App({
  onLaunch: function() {
    // 引入 BaaS SDK
    require('./vendor/sdk-wechat.3.14.0-beta.2')
    wx.BaaS.init(CLIENT_ID, {
      env: ENV,
    })
  },
})
