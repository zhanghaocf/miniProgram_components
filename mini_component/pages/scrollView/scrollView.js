// pages/scrollView/scrollView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading:false,
    isFinish:false,
    scrollViewHeight:0,
    loadType:'Loading4',
    datalist:[
      {
        id:1,
        n:'22'
      },
      {
        id: 2,
        n: '33'
      },
      {
        id: 3,
        n: '22'
      }, {
        id: 4,
        n: '22'
      }
      , {
        id: 5,
        n: '22'
      }, {
        id: 6,
        n: '22'
      }, {
        id: 7,
        n: '22'
      }, {
        id: 8,
        n: '22'
      }, {
        id: 9,
        n: '22'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sysInfo = wx.getSystemInfoSync();
    this.setData({
      scrollViewHeight: sysInfo.windowHeight//全屏高度
    })
  },
  getData:function(e){
    console.log(e)
  },
  getData:function(){
    var ths=this;
    ths.setData({
      isLoading: true
    })
    var datalist = ths.data.datalist;
    var arr=[
      {
        id: datalist.length+1,
        n: datalist.length+1
      },
      {
        id: datalist.length+2,
        n: datalist.length+2
      }
    ]
    datalist=datalist.concat(arr);
    if (datalist.length>=15){
      ths.setData({
        isFinish:true,
        isLoading: false 
      })
      return;
    }
    setTimeout(function(){
      console.log(datalist);
      ths.setData({
        datalist: datalist,
        isLoading: false
      })
    },1000)
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