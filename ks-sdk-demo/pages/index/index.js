//index.js
//获取应用实例
var app = getApp();
import utils from '../../utils/index';
Page({
  data: {
    bookList: [],
    creatingBookName: '', // 当前正在创建的书名
    editingBookName: '', // 当前正在编辑的书名
    avatar: '',
  },

  onLoad() {
    ks.BaaS.auth.loginWithKs().then(user => {
      this.setData({
        avatar: user.avatar,
      });
      this.fetchBookList();
    });
  },

  // 获取 bookList 数据
  fetchBookList() {
    let uid = parseInt(ks.BaaS.storage.get('uid'));
    utils.getBooks(uid, res => {
      this.setData({
        bookList: res.data.objects, // bookList array, mock data in mock/mock.js
      });
    });
  },

  // 绑定添加书目的输入框事件，设置添加的数目名称
  bindCreateBookNameInput(e) {
    let that = this;
    let value = e.detail.value;
    this.setData({
      creatingBookName: value,
    });
  },

  // 绑定添加书目的提交按钮点击事件，向服务器发送数据
  createBook(e) {
    utils.addBook(this, res => {
      this.setData({
        createBookValue: '',
      });
      this.fetchBookList();
    });
  },

  // 绑定每一行书目的“编辑”按钮点击事件，控制输入框和文本显示
  editBookButtonClicked(e) {
    let that = this;
    let activeIndex = e.currentTarget.dataset.index;
    let bookList = this.data.bookList;

    bookList.forEach((elem, idx) => {
      if (activeIndex == idx) {
        elem.isEditing = true;
      } else {
        elem.isEditing = false;
      }
    });

    that.setData({
      bookList,
    });
  },

  // 绑定每一行书目的输入框事件，设定当前正在编辑的书名
  bindEditBookNameInput(e) {
    let bookName = e.detail.value;
    this.setData({
      editingBookName: bookName,
    });
  },

  // 绑定修改书目的提交按钮点击事件，向服务器发送数据
  updateBook(e) {
    this.setData({
      curRecordId: e.currentTarget.dataset.bookId,
    });

    utils.updateBook(this, res => {
      this.fetchBookList();
      this.setData({ curRecordId: '' });
    });
  },

  // 删除当前行的书目
  deleteBook(e) {
    this.setData({
      curRecordId: e.currentTarget.dataset.bookId,
    });
    utils.deleteBook(this, res => {
      this.fetchBookList();
      this.setData({ curRecordId: '' });
    });
  },
});
