//index.js
import config from '../../config/config'
const app = getApp()

Page({
  data: {
    swiperAmount: 3,
    currentSwiper: 0,
    userInfo: null,
    isProfileComplete: false,
  },

  onLoad(options) {
    var self = this
    wx.BaaS.auth.getCurrentUser().then(user => {
      self.getUserInfo(user.get('id'))
    }).catch(err => {
      wx.BaaS.auth.loginWithWechat().then(user => {
        self.getUserInfo(user.get('id'))
      })
    })
  },

  getUserInfo: function(uid) {
    let MyUser = new wx.BaaS.User()
    MyUser.get(uid).then(res => {
      var userInfo = res.data
      if (userInfo.name && userInfo.phone && userInfo.company) {
        this.setData({
          userInfo: userInfo,
          isProfileComplete: true,
        })
      } else {
        this.setData({
          userInfo: userInfo,
        })
      }
      wx.setStorageSync('userInfo', userInfo)
    })
  },

  swiper: function(e) {
    this.setData({
      currentSwiper: e.detail.current
    })
  },
})