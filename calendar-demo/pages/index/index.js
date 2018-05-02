//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    date: '',
    loading: false,
    lunarDate: ''
  },

  bindDateChange (e) {
    this.setData({ date: e.detail.value })
  },

  handleSubmit () {
    this.setData({
      loading: true
    })

    wx.BaaS.invokeFunction('transToLunarDate', {date: this.data.date})
    .then(
      res => {
        this.setData({
          lunarDate: res.data
        })
      },
      err => console.log(err)
    )
    .then(() => this.setData({
      loading: false
    }))
  }
})
