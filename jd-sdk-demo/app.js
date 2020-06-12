//app.js
App({
  onLaunch: function () {
    // 引入 BaaS SDK
    require('./utils/sdk-jingdong.3.13.0-beta.6.js')
    let clientId = this.globalData.clientId
    jd.BaaS.init(clientId)
  },
  globalData: {
    clientId: '', // 从 BaaS 后台获取 ClientID
    tableName: 'bookshelf', // 从 https://cloud.minapp.com/dashboard/ 管理后台的数据表中获取
  }
});