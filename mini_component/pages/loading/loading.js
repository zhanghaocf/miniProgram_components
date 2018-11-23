// pages/loading/loading.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ltype:'gururin',
    isLoading:false,
    list:[
      {
        id:1,
        name:'gururin',
        btntype:'balanced'
      },
      {
        id: 2,
        name: 'cube',
        btntype: 'positive'
      },
      {
        id:3,
        name:'circle',
        btntype:'calm'
      },
      {
        id: 4,
        name: 'wave',
        btntype: 'assertive'
      },
      {
        id: 5,
        name: 'threedot',
        btntype: 'energized'
      },
      {
        id:6,
        name:'rocircle',
        btntype:'royal'
      },
      {
        id:7,
        name:'grid',
        btntype:'balanced'
      },
      {
        id:8,
        name:'foldcrid',
        btntype: 'positive'
      }
    ]
  },
  showLoading(e){
    this.setData({
      ltype:e.currentTarget.dataset.type,
      isLoading:true
    });
    setTimeout(()=>{
      this.setData({
        isLoading:false
      })
    },1500)
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