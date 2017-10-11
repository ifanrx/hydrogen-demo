import config from '../config/config'

let getMerchants = (ctx, cb) => {
  let tableId = config.TABLE_ID.MERCHANTS,
      Merchants = new wx.BaaS.TableObject(tableId)
  let query1 = new wx.BaaS.Query()
  query1.in('category', [ctx.data.tabs[0].value]) // 分类为科技 IT
  let query2 = new wx.BaaS.Query()
  query2.compare('priority', '>=', 1)

  let andQuery = wx.BaaS.Query.and(query1, query2)
  // 以 priority 字段升序
  Merchants.orderBy('priority')

  Merchants.setQuery(andQuery)
          .find()
          .then(res => cb(res))
          .catch(err => console.dir(err))

}

let getMerchantDetail = (ctx, cb) => {
  let tableId = config.TABLE_ID.MERCHANTS,
      recordId = ctx.data.merchantID,
      Merchants = new wx.BaaS.TableObject(tableId)
  
  Merchants.get(recordId)
          .then(res => cb(res))
          .catch(err => console.dir(err))
}

module.exports = {
  getMerchants,
  getMerchantDetail,
}