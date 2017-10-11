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

let addUser = (data, ctx) => {
  let tableId = config.BAAS.TABLE_ID,
    Users = new wx.BaaS.TableObject(tableId),
    User = Users.create()

  return User.set(data).save()
}

let updateUser = (params, ctx) => {
  let tableId = config.BAAS.TABLE_ID,
    { name, phone, company, recordId } = params

  let is_member = params.is_member ? params.is_member : false

  let Users = new wx.BaaS.TableObject(tableId),
    User = Users.getWithoutData(recordId)

  let data = {
    name,
    phone,
    company,
    is_member,
  }

  User.set(data)

  return User.update()

}


module.exports = {
  getUserProfile,
  addUser,
  updateUser,
}