import config from '../config/config'

module.exports = {

  assembleLocation(type, longitude, latitude) {
    if (type == 0) return longitude + ',' + latitude
    return latitude + ',' + longitude
  },

  showLoadingToast(title) {
    wx.showToast({
      title: title,
      icon: 'loading',
      duration: 10000
    })

    let timeoutId = setTimeout(() => {
      wx.hideToast()
      clearTimeout(timeoutId)
    }, 9000)

    return timeoutId
  },

  /**
   * 隐藏 loading 提示
   * @param  {Number} timeoutId
   * @param  {Object} modalObj  wx.showModal 配置
   */
  hideLoadingToast: function(timeoutId, modalObj) {
    this.delayHideToast();
    clearTimeout(timeoutId);

    if (modalObj) {
      wx.showModal(modalObj);
    }
  },

  /**
   * 延时隐藏 Totast
   * @param  {Number} delayTime 延时时间，单位毫秒，默认 800 ms
   */
  delayHideToast: function(delayTime) {
    delayTime = delayTime || 800;

    setTimeout(function() {
      wx.hideToast();
    }, delayTime);
  },

}