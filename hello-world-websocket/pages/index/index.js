//index.js
//获取应用实例
import utils from '../../utils/index'
var app = getApp()

const EVENT_LIST = ['create', 'update', 'delete']
const EVENT_TYPE = {
  CREATE: 'on_create',
  UPDATE: 'on_update',
  DELETE: 'on_delete',
}
let subscribeEventList = []

Page({
  data: {
    title: '我的书架',
    bookList: [],
    creatingBookName: '', // 当前正在创建的书名
    editingBookName: '', // 当前正在编辑的书名
    unreadMsg: [], // 未读站内信列表
    showMsg: false,
  },

  onLoad(options) {
    wx.BaaS.auth.loginWithWechat().then(user => {
      this.setData({
        profile: user.toJSON()
      })
      this.fetchBookList()
      this.subscribeBookList()
    })
  },

  onUnload() {
    // 取消表订阅
    subscribeEventList.forEach(event => {
      if (event.unsubscribe) event.unsubscribe()
    })
  },

  // 订阅 booklist 数据变化
  subscribeBookList() {
    let bookshelfTable = new wx.BaaS.TableObject(app.globalData.tableName)
    subscribeEventList = EVENT_LIST.map(event => {
      // 订阅数据表的创建、更新、删除数据动作
      return bookshelfTable.subscribe(event, {
        oninit: () => {
          console.log(`${event} 订阅成功==>`)
        },
        onevent: etv => {
          console.log(`${event} 订阅推送==>`, etv)
          this.handleSubscribeDataChanged(etv)
        },
        onerror: err => {
          console.log(`${event} 订阅断开==>`, err)
        },
      })
    })
  },

  handleSubscribeDataChanged(data) {
    let text = ''
    switch(data.event) {
      case EVENT_TYPE.CREATE:
        text = `我的书架新书上架啦：《${data.after.bookName}》`
        break
      case EVENT_TYPE.UPDATE:
        text = `我的书架书本更新啦：《${data.before.bookName}》=>《${data.after.bookName}》`
        break
      case EVENT_TYPE.DELETE:
        text = `我的书架书本下架啦：《${data.before.bookName}》`
    }
    this.setData({
      unreadMsg: [text, ...this.data.unreadMsg],
    })
  },

  showUnreadMsg() {
    this.setData({
      showMsg: true,
    })
  },

  readMsg() {
    this.setData({
      showMsg: false,
      unreadMsg: [],
    })
    this.fetchBookList()
  },

  // 获取 bookList 数据
  fetchBookList() {
    utils.getBooks(this.data.profile.id, (res) => {
      this.setData({
        bookList: res.data.objects // bookList array, mock data in mock/mock.js
      })
    })
  },

  // 绑定添加书目的输入框事件，设置添加的数目名称
  bindCreateBookNameInput(e) {
    let that = this
    let value = e.detail.value
    this.setData({
      creatingBookName: value
    })
  },

  // 绑定添加书目的提交按钮点击事件，向服务器发送数据
  createBook(e) {
    utils.addBook(this, (res) => {
      this.setData({
        createBookValue: '',
      })
      this.fetchBookList()
    })
  },

  // 绑定每一行书目的“编辑”按钮点击事件，控制输入框和文本显示
  editBookButtonClicked(e) {
    let that = this
    let activeIndex = e.currentTarget.dataset.index
    let bookList = this.data.bookList

    bookList.forEach((elem, idx) => {
      if (activeIndex == idx) {
       elem.isEditing = true
      } else {
        elem.isEditing = false
      }
    })

    that.setData({
      bookList
    })
  },

  // 绑定每一行书目的输入框事件，设定当前正在编辑的书名
  bindEditBookNameInput(e) {
    let bookName = e.detail.value
    this.setData({
      editingBookName: bookName,
    })
  },

  // 绑定修改书目的提交按钮点击事件，向服务器发送数据
  updateBook(e) {

    this.setData({
      curRecordId: e.target.dataset.bookId,
    })

    utils.updateBook(this, (res) => {
      this.fetchBookList()
      this.setData({curRecordId: ''})
    })
  },

  // 删除当前行的书目
  deleteBook(e) {
    this.setData({
      curRecordId: e.target.dataset.bookId,
    })
    utils.deleteBook(this, (res) => {
      this.fetchBookList()
      this.setData({curRecordId: ''})
    })
  },

  noop() {},

})