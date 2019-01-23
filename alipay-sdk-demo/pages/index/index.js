//index.js
//获取应用实例
import utils from '../../utils/index'
var app = getApp()

Page({
  data: {
    title: '我的书架',
    tableID: app.globalData.tableId,
    bookList: [],
    creatingBookName: '', // 当前正在创建的书名
    editingBookName: '', // 当前正在编辑的书名
    userInfo: {},
    avatar: '',
  },

  onLoad(options) {
    this.alipaySilentLogin()
    my.getAuthCode({
      scopes: 'auth_user',
      success: (res) => {
        my.getAuthUserInfo({
          success: ({ nickName, avatar }) => {
            this.setData({
              avatar
            })
          }
        });
      },
    });
  },

  cleanSession() {
    console.log('------- clean session start -------')
    my.BaaS.storage.set('uid', '')
    my.BaaS.storage.set('auth_token', '')
    my.BaaS.storage.set('session_expires_at', '')
    console.log('------- clean session end -------')
  },

  alipaySilentLogin() {
    this.cleanSession()
    my.BaaS.auth.loginWithAlipay().then((res) => {
      this.setData({
        userInfo: res.toJSON()
      })
      this.fetchBookList()
    }, err => {
      console.log(err)
    })
  },

  // 获取 bookList 数据
  fetchBookList() {
    let uid = parseInt(my.BaaS.storage.get('uid'))
    utils.getBooks(uid, (res) => {
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
      this.setData({ curRecordId: '' })
    })
  },

  // 删除当前行的书目
  deleteBook(e) {
    this.setData({
      curRecordId: e.target.dataset.bookId,
    })
    utils.deleteBook(this, (res) => {
      this.fetchBookList()
      this.setData({ curRecordId: '' })
    })
  },

})