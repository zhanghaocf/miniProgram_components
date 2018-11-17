// pages/component/component.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      count:1,
      stockQty:15,
      cli:false,
      maskBol:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  ha:function(){
    this.setData({
      cli:true,
      maskBol:true
    })
   
  },
  closemask:function(){
    var ths = this;
    ths.setData({
      cli: false,
      maskBol: false
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
  
  },
  opfn:function(event){
    var ths=this;
    var count=ths.data.count;
    var method = event.detail.opreation;
    switch (method){
      case 'plus':
        count++;
      break;
      case 'minus':
        count--;
        if(count<0){
          count=0;
          wx.showToast({
            title: '不能再少了',
            icon:"none"
          })
        }
      break;
      case 'change':
        count = event.detail.count;
      break;
      default:break;
    }
    ths.setData({
      count:count
    })
  }
})