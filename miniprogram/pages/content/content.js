// pages/content/content.js
const app = getApp();
import apipromise from '../../utils/wxapiToPromise.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'',
    isLoading:false,
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
  optfn(e) {
    this.data.message = e.detail.value;
  },
  sureFn() {
    var message = this.data.message;
    if (!message) {
      var options={
        title: '您需要填写点赞的内容哟~',
        icon: 'none'
      };
      apipromise.proxy.showToast(options).then(res=>{
        console.log(res);
        setTimeout(()=>{
          app.toast("记住！一定要填内容哟~");
        },1000)
      });
      return;
    }
    this.setData({
      isLoading:true
    })
    wx.cloud.callFunction({
      name:'addmessage',
      data: {
        message: message
      },
    }).then(res => {
      console.log(res.result) // 3
      if (!!res.result._id){
        wx.navigateTo({
          url: '/pages/share/share?messageid=' + res.result._id,
        })
      } else{
        app.toast("出现了神秘错误,请重新试一次");
      }
      this.setData({
        isLoading: false
      })
      }).catch(console.error)
    
  }
})