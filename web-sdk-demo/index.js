let BaaS = window.BaaS
let BookShelf = new BaaS.TableObject('bookshelf')
let clientID = ''  // 从 BaaS 后台获取 ClientID

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
    BaaS.init(clientID)
    this.getBookList()
  }
})