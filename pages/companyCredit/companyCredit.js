import {getCompanyCredit} from "../../utils/service.js"
// pages/companyCredit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userMd:null,
    qiyeleixing:null,
    creditRating:null,
    fraction: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // getCompanyCredit('00000651').then(

    // );


    var that = this
    wx.request({
      url: 'https://api.11315.com/webApp/index3/00000651', //仅为示例，并非真实的接口地址
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT(值必须为大写)
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.mapResult),
        that.setData({
          userMd: res.data.mapResult.userMd,
          qiyeleixing: res.data.mapResult.qiyeleixing,

          
          creditRating: res.data.mapResult.creditRating,
          fraction: res.data.mapResult.fraction,

        })


      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})