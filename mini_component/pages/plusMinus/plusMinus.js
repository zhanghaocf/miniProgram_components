// pages/plusMinus/plusMinus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:0,
    operaType:'operaCount'
  },
  operafn(e){
    const type=e.detail.opreation;
    let count=this.data.count;
    switch(type){
      case 'plus':
        count++;
      break;
      case 'minus':
        count--;
      break;
      case 'change':
        count=e.detail.count;
      break;
      default:break;
    }
    this.setData({
      count: count
    })
  },
  selectProp(e){
    this.setData({
      operaType: e.currentTarget.dataset.type
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