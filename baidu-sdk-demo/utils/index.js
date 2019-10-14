
let getBooks = (uid, cb) => {
  let tableName = getApp().globalData.tableName,
    Books = new swan.BaaS.TableObject(tableName),
    query = new swan.BaaS.Query()

  query.compare('created_by', '=', uid)
  Books.setQuery(query).find()
    .then(res => cb(res))
    .catch(err => console.dir(err))
}

let addBook = (ctx, cb) => {

  let tableName = getApp().globalData.tableName,
    Books = new swan.BaaS.TableObject(tableName),
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
  let tableName = getApp().globalData.tableName,
    recordId = ctx.data.curRecordId,
    bookName = ctx.data.editingBookName

  let Books = new swan.BaaS.TableObject(tableName),
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
  let tableName = getApp().globalData.tableName,
    recordId = ctx.data.curRecordId

  let Books = new swan.BaaS.TableObject(tableName)

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