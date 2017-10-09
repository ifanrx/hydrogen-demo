import config from '../../config/config'
import utils from '../../utils/utils'
import mapUtils from '../../utils/map'

const app = getApp()

Page({

  data: {
    merchantID: '',
    bannerUrl: '',
    companyName: '',
    logoUrl: '',
    telephone: '',
    location: '',
    introText: '',
    longitude: '',
    latitude: '',
  },

  onLoad(options) {

    let merchantID = options.id

    this.setData({
      merchantID,
    })

    let timeoutId = utils.showLoadingToast('加载中...')

    // 调用promise.all接口用于所有状态完成后的后续操作
    // 简化版只涉及loadInfo
    wx.BaaS.Promise.all([
      this.loadInfo()
    ]).finally(res => {
      utils.hideLoadingToast()
    })
  },

  loadInfo(id) {
    mapUtils.getMerchantDetail(this, (res) => {
      let merchantInfo = res.data
      this.initInfo(merchantInfo)
    })
  },

  initInfo(data) {
    this.setData({
      bannerUrl: data.image,
      companyName: data.title,
      logoUrl: data.logo,
      telephone: (data.phone + ''),
      location: data.address,
      introText: data.description,
      latitude: data.latitude,
      longitude: data.longitude
    })
  },

  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: this.data.telephone
    })
  },

  findLocation() {
    let that = this
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {

        let origin = utils.assembleLocation(0, res.longitude, res.latitude)

        let destination = utils.assembleLocation(0, that.data.longitude, that.data.latitude)

        wx.navigateTo({
          url: `../goToMap/goToMap?origin=${origin}&destination=${destination}`
        })
      }
    })
  }
})