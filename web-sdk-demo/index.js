let BaaS = window.BaaS
let BookShelf = new BaaS.TableObject('bookshelf')
let cacheKey = 'ifanrx_clientID'
new Vue({
  el: '#root',
  data() {
    return {
      bookList: [],
      creatingBookName: '',
    }
  },
  methods: {
    createBook() {
      if (!this.creatingBookName) return false
      let record = BookShelf.create()
      record.set({
        bookName: this.creatingBookName
      }).save().then(res => {
        this.creatingBookName = ''
        this.bookList.push({
          id: res.data.id,
          bookName: res.data.bookName,
          disabled: true,
        })
      })
    },
    editBook(book) {
      if (book.disabled) {
        book.disabled = false
      } else {
        let record = BookShelf.getWithoutData(book.id)
        record.set({bookName: book.bookName}).update().then(res => {
          book.disabled = true
        })
      }
    },
    deleteBook(book) {
      BookShelf.delete(book.id).then(() => {
        this.bookList = this.bookList.filter(v => {
          return v.id !== book.id
        })
      })
    },
    getBookList() {
      BookShelf.offset(0).limit(10).find().then(res => {
        res.data.objects.forEach(v => {
          this.bookList.push({
            id: v.id,
            bookName: v.bookName,
            disabled: true,
          })
        })
      })
    }
  },
  mounted() {
    if (!localStorage.getItem(cacheKey)) {
      let clientID = window.prompt('请输入 clientID')  // 从 BaaS 后台获取 ClientID
      localStorage.setItem(cacheKey, clientID) // 若输入了错误的 clientID，可以清空 localStorage
    }
    BaaS.init(localStorage.getItem(cacheKey))
    this.getBookList()
  }
})