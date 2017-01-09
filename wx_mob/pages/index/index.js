//index.js
var util = require('../../utils/util.js')
Page({
  data: {
    swiper: {
      background: ['green', 'red', 'yellow'],
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 300,
    },
    banners: [],
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeVertical: function (e) {
    this.setData({
      vertical: !this.data.vertical
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function(){
    var self = this;
    wx.request({
      // url: 'http://api.v3.iqianggou.com/api/appconfig?platform=3', //测试
      // url: 'http://m.api.haoshiqi.net/common/index', //测试
      url: 'http://cway-openapi.devapi.haoshiqi.net/common/index', //测试
      method: 'GET',
      data: {
        sourceType: 2,
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        var data = res.data.data;
        console.log(data);
        self.setData({
          bannerList: data.bannerList || [],
          productList: data.productList || [],
          productList: data.productList || [],
        })
      },
      fail: function(err){
        console.log(err);
      },
      complete: function(data) {
        console.log(data);
        console.log('请求完成');
      }
    })
  },
})


// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {}
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   bindGoNext: function(e){
//     console.log(e);
//     var dataset = e.currentTarget.dataset,
//         pageType = dataset.page;
//     switch(pageType){
//       case 'slider2':
//         wx.navigateTo({
//           url: '../slider/slider2',
//         })
//         console.log('无效页面跳转')
//         break;
//       default:
//         wx.navigateTo({
//           url: '../'+ pageType +'/' + pageType,
//         })
//     }
//   },
//   onLoad: function () {
//     console.log('onLoad')
//     var that = this
//   	//调用应用实例的方法获取全局数据
//     app.getUserInfo(function(userInfo){
//       //更新数据
//       that.setData({
//         userInfo:userInfo
//       })
//       that.update()
//     })
//   }
// })