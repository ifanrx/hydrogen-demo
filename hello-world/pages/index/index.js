//index.js
//获取应用实例

var app = getApp()

Page({
  data: {
    profile: null,
    title: '我的书架',
    tableID: 332, // 从 https://cloud.minapp.com/dashboard/ 管理后台的数据表中获取
    bookList: [],
    creatingBookName: '', // 当前正在创建的书名
    editingBookName: '', // 当前正在编辑的书名
  },

  onLoad(options) {
    this.setData({
      profile: app.getUserInfo()
    })
    this.fetchBookList()
  },

  // 获取 bookList 数据
  fetchBookList() {
    let that = this
    let tableID = this.data.tableID
    let objects = {
      tableID
    }

    wx.BaaS.getRecordList(objects).then((res) => {
      that.setData({
        bookList: res.data.objects // bookList array, mock data in mock/mock.js
      })
    }, (err) => {
      console.dir(err)
    });
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
    let that = this
    let tableID = this.data.tableID
    let bookName = this.data.creatingBookName
    let data = {
      bookName: bookName,
    }

    let objects = {
      tableID,
      data
    }

    // 创建一个数据项
    wx.BaaS.createRecord(objects).then((res) => {
      that.setData({
        createBookValue: '',
      })
      that.fetchBookList()
    }, (err) => {
      console.log(err)
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
    let that = this
    let tableID = this.data.tableID
    let recordID = e.target.dataset.bookId
    let bookName = this.data.editingBookName

    let data = {
      bookName: bookName,
    }

    let objects = {
      tableID,
      recordID,
      data
    }
    wx.BaaS.updateRecord(objects).then((res) => {
      that.fetchBookList()
    }, (err) => { })
  },

  // 删除当前行的书目
  deleteBook(e) {
    let that = this
    let tableID = this.data.tableID
    let recordID = e.target.dataset.bookId

    let objects = {
      tableID,
      recordID
    }

    wx.BaaS.deleteRecord(objects).then((res) => {
      that.fetchBookList()
    }, (err) => {
      console.dir(err)
    })
  },

})