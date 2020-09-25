App({
  onLaunch(options) {

    // 引入 BaaS SDK
    require('./utils/sdk-baidu.3.14.3.js')
    let clientId = this.globalData.clientId
    swan.BaaS.init(clientId)
  },
  
  globalData: {
    clientId: '', // 从 BaaS 后台获取 ClientID
    tableName: 'bookshelf', // 从 https://cloud.minapp.com/dashboard/ 管理后台的数据表中获取
  }
});
