
let getBooks = (uid, cb) => {
  let tableId = getApp().globalData.tableId,
    Books = new wx.BaaS.TableObject(tableId),
    query = new wx.BaaS.Query()

  query.compare('created_by', '=', uid)
  Books.setQuery(query).find()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}

let addBook = (ctx, cb) => {

  let tableId = getApp().globalData.tableId,
    Books = new wx.BaaS.TableObject(tableId),
    Book = Books.create(),
    bookName = ctx.data.creatingBookName

  let data = {
    bookName,
  }

  Book.set(data)
    .save()
    .then(res => cb(res))
    .catch(err => console.dir(err))

}

let updateBook = (ctx, cb) => {
  let tableId = getApp().globalData.tableId,
    recordId = ctx.data.curRecordId,
    bookName = ctx.data.editingBookName

  let Books = new wx.BaaS.TableObject(tableId),
    Book = Books.getWithoutData(recordId)

  let data = {
    bookName
  }

  Book.set(data)
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
  updateBook,
  deleteBook,
}