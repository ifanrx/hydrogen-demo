import config from '../config/config'

let getUserProfile = (ctx, cb) => {
  let tableId = config.BAAS.TABLE_ID,
      Users = new wx.BaaS.TableObject(tableId),
      uid = Number(wx.BaaS.storage.get('uid'))
  
  let query = new wx.BaaS.Query()
  query.compare('created_by', '=', uid)

  Users.setQuery(query)
      .find()
      .then(res => cb(res))
      .catch(err => console.dir(err))
}

let addUser = (params, ctx, cb1, cb2) => {
  let tableId = config.BAAS.TABLE_ID,
      Users = new wx.BaaS.TableObject(tableId),
      users = Users.create()

  users.set(params)
      .save()
      .then(res => cb1(res))
      .catch(err => cb2(err))
}

let updateUser = (params, ctx, cb1, cb2) => {
  let tableId = config.BAAS.TABLE_ID,
      {name, phone, company, recordId} = params
  
  let is_member = params.is_member ? params.is_member : false

  let Users = new wx.BaaS.TableObject(tableId),
      User = Users.getWithoutData(recordId)
  
  let payload = {
    name,
    phone,
    company,
    is_member,
  }

  User.set(payload)
  User.update()
    .then(res => cb1(res))
    .catch(err => cb2(err))
}


module.exports = {
  getUserProfile,
  addUser,
  updateUser,
}