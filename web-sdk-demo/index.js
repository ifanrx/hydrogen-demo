let BaaS = window.BaaS
let BookShelf = new BaaS.TableObject('bookshelf')
let cacheKey = 'ifanrx_clientID'
new Vue({
  el: '#root',
  data() {
    return {
      bookList: [],
      creatingBookName: '',
      loginForm: {
        email: '',
        password: '',
      },
      registerForm: {
        email: '',
        password: '',
      }
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
    },
    openLoginModal() {
      $('#loginModal').modal()
    },
    openRegisterModal() {
      $('#registerModal').modal()
    },
    handleLogin() {
      BaaS.auth.login(this.loginForm).then(() => {
        $('#loginModal').modal('hide')
        this.init()
      })
    },
    handleRegister() {
      BaaS.auth.register(this.registerForm).then(() => {
        $('#registerModal').modal('hide')
        this.init()
      })
    },
    init() {
      this.getBookList()
    },
  },
  mounted() {
    if (!localStorage.getItem(cacheKey)) {
      while (true) {
        let clientID = window.prompt('请输入 clientID')  // 从 BaaS 后台获取 ClientID
        if (clientID && clientID.match(/\w{20}/)) {
          localStorage.setItem(cacheKey, clientID) // 若输入了错误的 clientID，可以清空 localStorage
          break
        }
      }
    }
    BaaS.init(localStorage.getItem(cacheKey))
    BaaS.auth.getCurrentUser().then(() => {
      this.init()
    }).catch(e => {
      this.openLoginModal()
    })
  }
})