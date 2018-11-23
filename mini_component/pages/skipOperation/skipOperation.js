// pages/skipOperation/skipOperation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    needShare:true,
    selectIndex:-1,
    list:[
      {
        id:1,
        name:'zhangsan',
        age:19
      },
      {
        id:2,
        name:'lisi',
        age:20
      }
    ]
  },
  onChange(e){
    this.setData({
      needShare:e.detail.value
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

  },
  indepence(e){
    this.setData({
      selectIndex: e.detail.selectIndex
    })
  },
  share(e){
    var selectIndex = e.detail.index;
    console.log("分享了"+selectIndex);
  },
  delete(e){
    var selectIndex = e.detail.index;
    console.log("删除了" + selectIndex);
  }
})