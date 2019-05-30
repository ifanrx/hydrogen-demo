module.exports = {
  BAAS_CLIENT_ID: '', // 通过知晓云管理面板获取 ClientID

  TABLE_NAME: {
    MERCHANTS: null, // 通过知晓云管理面板获取数据表 名称
  },

  ROUTE: {
    NAVIGATOR: '/pages/navigator/navigator',
    COMPANY: '/pages/company/company'
  },

  API: {
    COORDINATE_TRANSFORMATION: 'https://restapi.amap.com/v3/assistant/coordinate/convert',
    CALCULATE_DISTANCE: 'https://apis.map.qq.com/ws/distance/v1/',
  },

  QQ_LBS: {
    WEB_API: '', // 需自行申请一个腾讯地图的开发 key
  },

  // 高德地图 key
  AUTO_NAVI: {
    JS_SDK: '', // 需自行申请高德地图的开发 key
    WEB_API: '', // 需自行申请高德地图的开发 key
  },
}