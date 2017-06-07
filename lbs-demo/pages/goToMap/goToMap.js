// app地图页
import amapFile from '../../utils/amap-wx'
import config from '../../config/config'
import constant from '../../config/constant'
import utils from '../../utils/utils'

const app = getApp()

Page({

  data: {
    origin: '',
    destination: '',
    mapLongitude: '113.324520',
    mapLatitude: '23.099994',
    routeColor: "#0091FF",
    controls: [{
      id: 'goHome',
      iconPath: '/resources/go-map@3x.png',
      clickable: true,
      position: {
        left: 303,
        top: 480,
        width: 52,
        height: 52,
      }
    }],
    polyline: [],
    includePoints: [],
    markers: [],
  },

  onLoad(options) {
    let origin = options.origin
    let destination = options.destination

    let originArr = this.disassembleLocation(origin)
    let destinationArr = this.disassembleLocation(destination)

    this.setData({
      mapLongitude: originArr[0],
      mapLatitude: originArr[1]
    })

    this.setData({
      origin,
      destination
    })

    this.setDestinationMarker(destinationArr[0], destinationArr[1])
    this.routeArrange(origin, destination)
  },

  disassembleLocation(locString) {
    return locString.split(',')
  },

  setDestinationMarker(longitude, latitude) {

    let markers = []
    let marker = {
      id: 'destination',
      longitude,
      latitude,
      iconPath: '/resources/0@3x.png', // 简化版值用到科技IT分类的公司
      width: 32,
      height: 40
    }

    markers.push(marker)
    this.setData({
      markers
    })
  },

  routeArrange(origin, destination) {
    let origins = origin.split(',')
    let routeColor = this.data.routeColor

    this.setData({
      mapLongitude: origins[0],
      mapLatitude: origins[1]
    })

    let that = this
    let aMap = new amapFile.AMapWX({
      key: config.AUTO_NAVI.JS_SDK
    })

    // 调用高德地图微信api获取路线规划
    // http://lbs.amap.com/api/javascript-api/summary/
    aMap.getWalkingRoute({
      origin: origin,
      destination: destination,
      success: function(data) {
        let points = [];
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          var steps = data.paths[0].steps;
          for (var i = 0; i < steps.length; i++) {
            var poLen = steps[i].polyline.split(';');
            for (var j = 0; j < poLen.length; j++) {
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              })
            }
          }
        }

        that.setData({
          polyline: [{
            points: points,
            color: routeColor,
            width: 6,
            dottedLine: true,
          }]
        });

        if (data.paths[0] && data.paths[0].distance) {
          that.setData({
            distance: data.paths[0].distance + '米'
          });
        }
        if (data.paths[0] && data.paths[0].duration) {
          that.setData({
            cost: parseInt(data.paths[0].duration / 60) + '分钟'
          });
        }

        that.setIncludePoints(points)
      },

      fail: function(info) {
        console.log("info faild: ", info)
      }
    })
  },

  setIncludePoints(polylinePoints) {
    let origin = this.data.origin.split(',')
    let destination = this.data.destination.split(',')

    let originDestinationPonits = [{
      longitude: parseFloat(origin[0]),
      latitude: parseFloat(origin[1])
    }, {
      longitude: parseFloat(destination[0]),
      latitude: parseFloat(destination[1])
    }]

    let includePoints = originDestinationPonits.concat(polylinePoints)

    this.setData({
      includePoints: includePoints
    })
  },

  controlTap(e) {

    let id = e.controlId

    if (id == 'goHome') {
      getApp().navToHome()
    }
  }
})