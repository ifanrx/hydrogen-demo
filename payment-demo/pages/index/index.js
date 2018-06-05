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
    var uid = wx.BaaS.storage.get('uid')
    if (!uid) {
      wx.BaaS.login(false).then(res => {
        self.getUserInfo(res.id)
      })
    } else {
      this.getUserInfo(uid)
    }
  },

  getUserInfo: function(uid) {
    let MyUser = new wx.BaaS.User()
    MyUser.get(uid).then(res => {
      var userInfo = res.data
      if (userInfo.nickname && userInfo.phone && userInfo.company) {
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