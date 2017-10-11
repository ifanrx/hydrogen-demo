import config from '../../config/config'
import utils from '../../utils/index'

const app = getApp()
Page({
  data: {
    name: '',
    phone: '',
    company: '',
    isFirstCommit: true
  },
  onLoad: function () {
    utils.getUserProfile(this, (res) => {
      let {
        name,
        phone,
        company
      } = res.data.objects[0]

      if (res.data.meta.total_count != 0) {
        this.setData({
          name,
          phone,
          company,
          isFirstCommit: false,
          recordID: res.data.objects[0].id
        })

      } else {
        this.setData({
          name: (wx.BaaS.storage.get('userinfo')).nickname,
        })
      }
    })
  },

  // 表单输入操作
  input_name(e) {
    let that = this
    this.throttle(() => {
      that.setData({
        name: e.detail.value
      })
    }, this)
  },

  input_phone(e) {
    let that = this
    this.throttle(() => {
      that.setData({
        phone: e.detail.value
      })
    }, this)
  },

  input_company(e) {
    let that = this
    this.throttle(() => {
      that.setData({
        company: e.detail.value
      })
    }, this)
  },

  submit(e) {
    wx.showNavigationBarLoading()
    let {
      name,
      phone,
      company,
      isFirstCommit,
      recordID,
    } = this.data

    if (name && phone && company) {

      if (isFirstCommit) {
        let data = {
          name,
          phone,
          company,
          is_member: false,
          isProfileComplete: true,
          isFirstCommit: false,
        }

        utils.addUser(data, this)
          .then(res => {
            wx.hideNavigationBarLoading()
            wx.navigateTo({
              url: config.ROUTE.PAGE.INDEX
            })
          })
          .catch(err => {
            wx.hideNavigationBarLoading()
            wx.showModal({
              title: "啊咧！资料保存出错了。",
              content: "大概是网络不太顺畅，可以稍后再尝试一下。",
              showCancel: false,
              confirmText: '好',
              confirmColor: '#FD544A'
            })
          })

      } else {
        let data = {
          name,
          phone,
          company,
          recordId: recordID,
        }

        utils.updateUser(data, this)
          .then(res => {
            wx.hideNavigationBarLoading()
            wx.navigateTo({
              url: config.ROUTE.PAGE.INDEX
            })
          })
          .catch(err => {
            wx.showModal({
              title: "啊咧！资料保存出错了。",
              content: "大概是网络不太顺畅，可以稍后再尝试一下。",
              showCancel: false,
              confirmText: '好',
              confirmColor: '#FD544A'
            })
          })
      }
    } else {
      console.log(this.data)
      wx.hideNavigationBarLoading()
      wx.showModal({
        title: '资料木有齐全',
        content: '请确保信息完整',
        showCancel: false,
        confirmText: '好的',
        confirmColor: '#FD544A'
      })
    }
  },

  throttle(method, context) {
    clearTimeout(this.data.timeout)
    this.setData({
      timeout: setTimeout(function () {
        method.call(context)
      }, 300)
    })
  }

})
