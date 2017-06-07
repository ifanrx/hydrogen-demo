//index.js
import config from '../../config/config'
const app = getApp()

Page({
  data: {
    img_logo: config.ROUTE.IMG.LOGO,
    img_unLogin: config.ROUTE.IMG.UNLOGIN,
    img_dot: config.ROUTE.IMG.DOT,
    img_dot_active: config.ROUTE.IMG.DOT_ACTIVE,
    pageCount: 3,
    pageIndex: 0,
    isLogin: false,
    isProfileComplete: false,
    userInfo: null,

  },

  onLoad(options) {

    this.getUserInfo()
    app.getPageStack()

  },

  getUserInfo(){
    // 等待用户登录后再发起获取信息操作
    setTimeout(()=>{
      let userInfo = app.getUserInfo()

      if(wx.BaaS.storage.get('uid')) {
        Object.assign(userInfo,{
          isLogin: true,
        })
        this.setData({
          userInfo
        })
      }

      // 从 BaaS 获取用户进一步信息
      wx.BaaS.getRecordList({
        tableID: config.BAAS.TABLE_ID,
        created_by: wx.BaaS.storage.get('uid')
      }).then(res => {
        let _userInfo = res.data.objects[0]
        Object.assign(userInfo,_userInfo)
        this.setData({
          userInfo
        })
      }).catch(err=>{
      })
    }, 300)
  },

  buyAction(e) {
    wx.navigateTo({
      url: config.ROUTE.PAGE.ORDER
    })
  },

  goToProfile(e) {
    wx.navigateTo({
      url: config.ROUTE.PAGE.PROFILE
    })
  },

  swiper(e) {
    let activePageIndex = e.detail.current
      this.setData({
        pageIndex: activePageIndex
      })
  }
})