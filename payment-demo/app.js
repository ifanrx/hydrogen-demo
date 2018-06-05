import config from './config/config'
//app.js
App({

  onLaunch() {
    require('./vendor/sdk-v1.4.0')

      const clientID = config.BAAS.CLIENT_ID
      wx.BaaS.init(clientID)
  },
})