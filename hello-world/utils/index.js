
let getBooks = (ctx, cb) => {

  let tableId = getApp().globalData.tableId,
      Books = new wx.BaaS.TableObject(tableId)
  
  Books.find()
      .then(res => cb(res))
      .catch(err => console.dir(err))
}

let addBook = (ctx, cb) => {

  let tableId = getApp().globalData.tableId,
      Books = new wx.BaaS.TableObject(tableId),
      books = Books.create(),
      bookName = ctx.data.creatingBookName
  
  let book = {
    bookName,
  }

  books.set(book)
      .save()
      .then(res => cb(res))
      .catch(err => console.dir(err))

}

let updataBook = (ctx, cb) => {
  let tableId = getApp().globalData.tableId,
      recordId = ctx.data.curRecordId,
      bookName = ctx.data.editingBookName
  
  let Books = new wx.BaaS.TableObject(tableId),
      books = Books.getWithoutData(recordId)

  let book = {
    bookName
  }

  books.set(book)
      .update()
      .then(res => cb(res))
      .catch(err => console.dir(err))
}

let deleteBook = (ctx, cb) => {
  let tableId = getApp().globalData.tableId,
      recordId = ctx.data.curRecordId
  
  let Books = new wx.BaaS.TableObject(tableId)

  Books.delete(recordId)
      .then(res => cb(res))
      .catch(err => console.dir(err))
}

module.exports = {
  getBooks,
  addBook,
  updataBook,
  deleteBook,
}