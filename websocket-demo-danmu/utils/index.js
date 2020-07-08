let addDanmu = text => {
  let tableName = getApp().globalData.tableName,
    Table = new wx.BaaS.TableObject(tableName),
    Danmu = Table.create()

  let data = {
    text,
  }
  Danmu.set(data)
    .save()
    .catch(err => console.dir(err))
}

let getDanmuList = () => {
  let tableName = getApp().globalData.tableName,
    Table = new wx.BaaS.TableObject(tableName)

  return Table.limit(100).find()
}

module.exports = {
  addDanmu,
  getDanmuList,
}