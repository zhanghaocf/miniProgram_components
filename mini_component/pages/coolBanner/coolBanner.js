// pages/kuBanner/kuBanner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [
      {
        id: 1,
        src: '/imgs/banner1.jpg',
        
      },
      {
        id: 2,
        src: '/imgs/banner2.jpg',
        title: '轮播图二',
      },
      {
        id: 3,
        src: '/imgs/banner3.jpg',
        title: '点击可以跳转首页',
        url: '/pages/index/index'
      },
      {
        id: 4,
        src: '/imgs/banner4.jpg',
        title: '轮播图四',
      },
      {
        id: 5,
        src: '/imgs/banner5.jpg',
        title: '轮播图五',
      }
    ],
    dotshow:true,
    circle:true,
    autoplay:true,
  },
  onChange(e) {
    this.setData({
      [e.currentTarget.dataset.name]:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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