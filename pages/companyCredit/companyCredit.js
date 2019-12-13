import {getCompanyCredit} from "../../utils/service.js";

var jsonData = require('../../utils/creditPic.js');

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
    state:null,
    shouqit:"收起",
    isShow:false,
    sanjiao:"../../images/more-retract.png",
    appList:[],
    imageData: jsonData.dataList,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://api.11315.com/webApp/index3/00000651', //仅为示例，并非真实的接口地址
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT(值必须为大写)
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        for (var p in res.data.mapResult.appList) {
          for (var child in res.data.mapResult.appList[p].appChilds) {
            for (var imageNum in that.data.imageData) {
              // console.log(that.data)
              // console.log(res.data.mapResult.appList[p].appChilds[child])

              if (that.data.imageData[imageNum].archiveTypeId == res.data.mapResult.appList[p].appChilds[child].archiveTypeId){
                res.data.mapResult.appList[p].appChilds[child].image = that.data.imageData[imageNum].image;
                res.data.mapResult.appList[p].appChilds[child].image_no = that.data.imageData[imageNum].image_no;
                }
            }
          }
        }
        that.setData({
          userMd: res.data.mapResult.userMd,
          qiyeleixing: res.data.mapResult.qiyeleixing,
          creditRating: res.data.mapResult.creditRating,
          fraction: res.data.mapResult.fraction,
          state: res.data.mapResult.userMd.revokeState,
          appList: res.data.mapResult.appList,

        })
      }
    })
  
  },

  /**
    * 点击
    */
  shouqi: function () {
    if (this.data.shouqit === "收起") {
      this.setData({
        shouqit: '展开',
        isShow:true,
        sanjiao: "../../images/more-open.png",

      })
    } else {
      this.setData({
        shouqit: '收起',
        isShow: false,
        sanjiao: "../../images/more-retract.png",

      })
    }

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