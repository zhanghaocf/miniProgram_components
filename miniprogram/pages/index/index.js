// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://zhgroot.cn/tp5/public/index.php/index/test/haha',
    //   success(res){
    //     console.log(res);
    //   }
    // })
    // const socketTask= wx.connectSocket({
    //   url: 'wss://zhgroot.cn/wss',
    //   data: {
    //     x: '',
    //     y: ''
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   method: "GET"
    // });
    // socketTask.onMessage((res)=>{
    //   console.log(res);
    // })
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
  h(){
    const name = this.data.name;
    this.setData({
      name:!name
    })
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
  formSubmit(e){
    var formId=e.detail.formId;
    console.log(formId);
    wx.request({
      url: 'https://zhgroot.cn/tp5/public/index.php/index/Mini/sendTemplateMessage?formId=' + formId,
      success(res){
        console.log(res);
      }
    })
  }
})