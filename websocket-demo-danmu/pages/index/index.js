import utils from '../../utils/index'
const app = getApp()
function getRandomColor() {
  const rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

let subscribeEvent

Page({
  inputValue: '',
  data: {
    src: '',
    danmuList: [
      // {
      //   text: '第 1s 出现的弹幕',
      //   color: '#ff0000',
      //   time: 1,
      // },
      // {
      //   text: '第 3s 出现的弹幕',
      //   color: '#ff00ff',
      //   time: 3,
      // },
    ],
  },

  onLoad() {
    wx.BaaS.auth.loginWithWechat().then(() => {
      this.getDanmuList()
      this.subscribeDanmuList()
    })
  },

  onReady() {
    this.videoContext = wx.createVideoContext('myVideo')
  },

  onUnload() {
    // 取消表订阅
    if (subscribeEvent.unsubscribe) subscribeEvent.unsubscribe()
  },

  getDanmuList() {
    utils.getDanmuList().then(res => {
      let danmuList = res.data.objects.map(item => {
        return {
          text: item.text,
          color: getRandomColor(),
          time: Math.ceil(Math.random() * 10),
        }
      })
      this.setData({
        danmuList,
      })
    })
  },

  // 订阅 danmu_list 数据变化
  subscribeDanmuList() {
    let danmuListTable = new wx.BaaS.TableObject(app.globalData.tableName)
    subscribeEvent = danmuListTable.subscribe('create', {
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
  },

  bindInputBlur(e) {
    this.inputValue = e.detail.value
  },

  bindSendDanmu() {
    this.bindPlay()
    utils.addDanmu(this.inputValue)
  },

  bindPlay() {
    this.videoContext.play()
  },
  bindPause() {
    this.videoContext.pause()
  },

  videoErrorCallback(e) {
    console.log('视频错误信息：', e.detail.errMsg)
  },
})
