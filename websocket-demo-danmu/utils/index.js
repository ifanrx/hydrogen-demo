let addDanmu = (text, time) => {
  let tableName = getApp().globalData.tableName,
    Table = new wx.BaaS.TableObject(tableName),
    Danmu = Table.create()

  let data = {
    text,
    time,
  }
  Danmu.set(data)
    .save()
    .catch(err => console.dir(err))
}

let getDanmuList = () => {
  let tableName = getApp().globalData.tableName,
    Table = new wx.BaaS.TableObject(tableName)

  return Table.limit(500).find()
}

module.exports = {
  addDanmu,
  getDanmuList,
}