function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

let DanmuObject = new wx.BaaS.TableObject('danmu')

Page({
  subscription: null,

  data: {
    isAuthenticated: false,
    danmuList: [],
    text: '',
    danmuEnabled: true,
  },

  onLoad() {
    wx.BaaS.auth.getCurrentUser()
      .then(res => {
        console.log(res)
        this.setData({isAuthenticated: true})
        this.subscribeDanmu()
      }, err => {
        console.log('获取当前用户信息失败', err)
        this.unsubscribeDanmu()
      })
  },

  onReady() {
    this.videoContext = wx.createVideoContext('myVideo')
  },


  login() {
    // 微信用户登录小程序
    wx.BaaS.auth.loginWithWechat().then(() => {
      this.setData({isAuthenticated: true})
      // 登录成功
      this.subscribeDanmu()
    }, err => {
      // 登录失败
      console.log('登录失败', err)
      this.unsubscribeDanmu()
    })
  },

  onTextChange(e) {
    this.setData({text: e.detail.value})
  },

  sendDanmu() {
    DanmuObject
      .create()
      .set({text: this.data.text})
      .save()
      .then(() => {
        this.setData({text: ''})
      })
      .catch(err => {
        console.log(err)
      })
  },

  toggleDanmu(e) {
    const v = e.detail.value

    if (v) {
      this.subscribeDanmu()
    } else {
      this.unsubscribeDanmu()
    }

    this.setData({
      danmuEnabled: v
    })
  },

  subscribeDanmu() {
    if (this.subscription == null) {
      this.subscription = DanmuObject.subscribe('create', {
        oninit: () => {
          console.log(`create 订阅成功==>`)
        },
        onevent: etv => {
          console.log(`create 订阅推送==>`, etv)
          this.videoContext.sendDanmu({
            text: etv.after.text,
            color: getRandomColor(),
          })
        },
        onerror: err => {
          console.log(`create 订阅断开==>`, err)
        },
      })
    }
  },

  unsubscribeDanmu() {
    if (this.subscription) {
      this.subscription.unsubscribe()
      this.subscription = null
    }
  },

  onUnload() {
    this.unsubscribeDanmu()
  },
})
