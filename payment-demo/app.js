import config from './config/config'
//app.js
App({

  onLaunch() {
    require('./utils/sdk-v1.1.3')

      const clientID = config.BAAS.CLIENT_ID
      wx.BaaS.init(clientID)
  },
})