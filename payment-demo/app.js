import config from './config/config'
//app.js
App({

  onLaunch() {

    require('./utils/sdk-v1.1.0')

      const clientID = config.BAAS.CLIENT_ID

      wx.BaaS.init(clientID)

      let uid = this.getUserID()

      if(!uid) {
        wx.BaaS.login()
          .then(res => {
            console.log('BaaS is logined...')
          })
      }
  },

  getUserID(){

    if(this.uid) {
      return this.uid
    }

    let uid = wx.BaaS.storage.get('uid')
    this.uid = uid

    return uid
  },

  getUserInfo(){
    if(this.userInfo) {
      return this.userInfo
    }


    let userInfo = wx.BaaS.storage.get('userinfo')
    this.userInfo = userInfo

    return userInfo
  },

  getPageStack(){
    const currentPages = getCurrentPages()
  },
})