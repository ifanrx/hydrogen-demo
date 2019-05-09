App({
  onLaunch(options) {

    // 引入 BaaS SDK
    require('./utils/sdk-alipay.2.0.0')

    let clientId = this.globalData.clientId

    my.BaaS.init(clientId)
  },
  
  globalData: {
    clientId: '', // 从 BaaS 后台获取 ClientID
    tableName: 'bookshelf', // 从 https://cloud.minapp.com/dashboard/ 管理后台的数据表中获取
  }
});
