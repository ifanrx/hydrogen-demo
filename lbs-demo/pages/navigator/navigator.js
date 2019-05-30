// app导航页
import config from '../../config/config'
import constant from '../../config/constant'
import utils from '../../utils/utils'
import mapUtils from '../../utils/map'

const app = getApp()

Page({
  data: {
    isMapShow: true,
    src: '../../resources/overlay.jpg',
    tabs: constant.tabs,
    merchantsData: [],
    coreLongitude: '113.32498',
    coreLatitude: '23.09733',
    markers: [],
    isMerchantInfoShow: false,
    isSpread: true,
    scrollLeft: 0,
  },

  onLoad(options) {

    // 获取company并设置到markers
    let intervalId = setInterval(() => {
      let uid = this.userID
      if (uid) {
        this.getCategory()
        clearInterval(intervalId)
      }
    }, 30)

  },

  // tabs part
  // 获取分类下的所有merchants数据
  getCategory() {
    mapUtils.getMerchants(this, (res) => {
      // 数组，每个成员为商家的对象
      let merchantsData = res.data.objects
      this.setData({
        merchantsData
      })
      // 获取merchants数据后，将数据
      // 格式化到tabsMarkers
      this.setTabsMarkers(merchantsData)
    })
  },

  setTabsMarkers(merchants) {

    let markers = []

    merchants.forEach((item) => {
      let marker = {
        id: item.id,
        longitude: item.longitude,
        latitude: item.latitude,
        iconPath: '../../resources/' + 0 + '@3x.png', // 科技IT分类的图片名的index = 0
        width: 32,
        height: 40
      }
      markers.push(marker)
    })

    this.setData({
      markers,
    })

  },

  markerTap(e) {

    let that = this
    let isSpread = this.data.isSpread
    let merchantID = e.markerId
    let merchantsData = this.data.merchantsData

    // marker激活态
    this.updateMarkerColor(merchantID)

    // 从markers中筛选出正在点击的marker
    let activeMerchant = merchantsData.find(item => {
      return merchantID === item.id
    })

    if (isSpread) {
      let activeMerchantIndex;
      let scrollLeft;

      merchantsData.forEach((item, index) => {
        if (merchantID == item.id) {
          scrollLeft = index * 140
          this.setData({
            scrollLeft,
            activeMerchantIndex: index
          })
        }
      })

      return
    }



    let api, start, end

    end = this.assembleLocation(1, activeMerchant.longitude, activeMerchant.latitude)

    activeMerchant.destination = utils.assembleLocation(0, activeMerchant.longitude, activeMerchant.latitude)

    this.setData({
      activeMerchant
    })

    // 获取用户当前位置，调用腾讯计算位置api获取距离信息
    wx.getLocation({
      type: 'gcj02',
      complete: (res) => {
        if (res.errMsg === 'getLocation:ok') {
          start = utils.assembleLocation(1, res.longitude, res.latitude)
          activeMerchant.origin = utils.assembleLocation(0, res.longitude, res.latitude)
          that.setData({
            activeMerchant,
          })

          api = `${config.API.CALCULATE_DISTANCE}?mode=walking&from=${start}&to=${end}&key=${config.QQ_LBS.WEB_API}`

          wx.request({
            url: api,
            complete: (res) => {
              if (res.statusCode == constant.STATUS_CODE.SUCCESS) {
                activeMerchant.distance = res.data.result.elements[0].distance
                that.setData({
                  activeMerchant,
                })
              }
            }
          })
        }
      }
    })

    this.setData({
      isMerchantInfoShow: true,
      isMapShow: false
    })
  },

  closePopup(e) {
    this.setData({
      isMerchantInfoShow: false,
      isMapShow: true
    })
  },

  hiddenMerchantInfo(e) {
    this.setData({
      isMerchantInfoShow: false,
      isMapShow: true
    })
  },

  // map parts
  getCoreLocation() {

    let that = this

    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        let coreLatitude = res.latitude
        let coreLongitude = res.longitude

        that.setData({
          coreLongitude,
          coreLatitude
        })

      }
    })
  },

  /**
   * @description 根据 type 值组装位置字符串
   * 百度和高德都是经度在前纬度在后，而腾讯是反过来的，要注意处理
   * @param  {Int} type      0 代表正常顺序, 1 代表反序
   * @param  {Float} longitude  经度
   * @param  {Float} latitude  纬度
   * @return {String}           拼凑好的位置字符串
   */
  assembleLocation(type, longitude, latitude) {
    if (type == 0) return longitude + ',' + latitude
    return latitude + ',' + longitude
  },

  navigateToMerchant(e) {
    let {
      origin,
      destination
    } = this.data.activeMerchant

    this.setData({
      isMerchantInfoShow: false,
      isMapShow: true,
      isSpread: true
    })

    wx.navigateTo({
      url: `../goToMap/goToMap?origin=${origin}&destination=${destination}`
    })
  },

  // markers
  updateMarkerColor(id) {
    let activeMarkerId = id
    let markers = this.data.markers
    let activeMerchantIndex = 0
    let activeIconPath = `/resources/${activeMerchantIndex}`

    markers.forEach(item => {
      if (item.id === activeMarkerId) {
        item.iconPath = activeIconPath + 'choosed@3x.png'
      } else if (item.id !== activeMarkerId) {
        item.iconPath = activeIconPath + '@3x.png'
      }
    })
    this.setData({
      markers
    })
  },

  // merchants parts
  switchMerchantsItems(e) {
    this.setData({
      isSpread: !this.data.isSpread
    })
  }
})