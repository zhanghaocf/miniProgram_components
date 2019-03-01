// pages/share/share.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canvasW: '',
    canvasH: 250,
    eyeTransform: 0,
    eyebol: true,
    content:'',
    isLoading:false,
    messageId:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var ths=this;
    this.setData({
      canvasW: wx.getSystemInfoSync().screenWidth,
      messageId: options.messageid
    },function(){
      ths.canvasOpt();
      ths.getMessage();
    });
  },
  getMessage(){
    var messageId = this.data.messageId;
    this.setData({
      isLoading:true
    });
    wx.cloud.callFunction({
      name:'getmessage',
      data:{
        messageId: messageId
      }
    }).then(res=>{
      console.log(res);
      if(!!res.result.data[0].message){
        this.setData({
          content: res.result.data[0].message
        });
      }else{
        app.toast("发生错误喽，再试一次呗")
      }
      this.setData({
        isLoading: false
      });
      }).catch(console.error)
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
    var messageId = this.data.messageId
    return {
      title: '帮我一下',
      path: '/pages/share/share?messageid=' + messageId
    }
  },
  canvasOpt() {
    const ctx = wx.createCanvasContext('myCanvas');
    ctx.save();
    this.drawInitHand(ctx, "r");
    this.drawInitHand(ctx, "l");
    this.totalAction(ctx);
    setTimeout(() => {
      this.main(ctx);
    }, 2000);
    ctx.draw();
  },
  totalAction(ctx) {
    var eyeTransform = this.data.eyeTransform;
    if (eyeTransform < 0) {
      this.drawHand(ctx, "l");
      this.drawInitHand(ctx, "r");
    } else if (eyeTransform > 0) {
      this.drawHand(ctx, "r");
      this.drawInitHand(ctx, "l");
    }
    //this.drawInitHand(ctx, "r");
    this.drawFoot(ctx);
    this.drawBody(ctx);
    //this.drawHand(ctx, "l");
    this.drawHead(ctx);
    this.drawEye(ctx);
  },
  main(ctx) {
    var data = this.data;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    ctx.clearRect(0, 0, canvasW, canvasH);
    ctx.beginPath();
    this.eyemove();
    this.totalAction(ctx);
    ctx.draw();
    setTimeout(() => {
      this.main(ctx);
    }, 60);
  },
  //眼睛动
  eyemove() {
    var eyeTransform = this.data.eyeTransform;
    var bol = this.data.eyebol;
    if (eyeTransform === -10) {
      bol = false;
    } else if (eyeTransform === 10) {
      bol = true;
    }
    if (bol) {
      eyeTransform--;
    } else {
      eyeTransform++;
    }
    this.data.eyebol = bol;
    this.data.eyeTransform = eyeTransform;
  },
  drawHead(ctx) {
    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 20;
    var eyeTransmove = data.eyeTransform > 0 ? data.eyeTransform : -data.eyeTransform;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var centerX = canvasW / 4;
    var centerY = 50;
    ctx.beginPath();
    ctx.translate(0, eyeTransmove);
    ctx.setLineWidth(3);
    ctx.scale(2, 1.3);
    ctx.arc(centerX, centerY, w, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.setFillStyle('white')
    ctx.fill();

    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 15;
    var eyeTransmove = data.eyeTransform > 0 ? data.eyeTransform : -data.eyeTransform;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var centerX = canvasW / 4 + 70;
    var centerY = 70;
    ctx.beginPath();
    ctx.translate(0, eyeTransmove);
    ctx.setLineWidth(3);
    ctx.scale(2, 1.3);
    ctx.arc(centerX, centerY, w, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.setFillStyle('white')
    ctx.fill();

    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 15;
    var eyeTransmove = data.eyeTransform > 0 ? data.eyeTransform : -data.eyeTransform;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var centerX = canvasW / 4 - 70;
    var centerY = 70;
    ctx.beginPath();
    ctx.translate(0, eyeTransmove);
    ctx.setLineWidth(3);
    ctx.scale(2, 1.3);
    ctx.arc(centerX, centerY, w, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.setFillStyle('white')
    ctx.fill();
  },
  drawEye(ctx) {
    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 7;
    var inter = 20;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var eyeTransform = data.eyeTransform === 404 ? 0 : data.eyeTransform;
    var eyeL = canvasW / 2 - inter;
    var eyeR = canvasW / 2 + inter;
    ctx.beginPath();
    ctx.translate(eyeTransform, 0);
    ctx.arc(eyeL, 65, w, 0, 2 * Math.PI);
    ctx.arc(eyeR, 65, w, 0, 2 * Math.PI);
    ctx.moveTo(eyeR, 60);
    ctx.setStrokeStyle('black');
    ctx.setLineWidth(3);
    ctx.stroke();
    ctx.fill();

    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 5;
    var inter = 15;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var eyeTransform = data.eyeTransform === 404 ? 0 : data.eyeTransform;
    var eyeL = canvasW / 2 - inter + 140;
    var eyeR = canvasW / 2 + inter + 140;
    ctx.beginPath();
    ctx.translate(eyeTransform, 0);
    ctx.arc(eyeL, 90, w, 0, 2 * Math.PI);
    ctx.arc(eyeR, 90, w, 0, 2 * Math.PI);
    ctx.moveTo(eyeR, 60);
    ctx.setStrokeStyle('black');
    ctx.setLineWidth(3);
    ctx.stroke();
    ctx.fill();

    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 5;
    var inter = 15;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var eyeTransform = data.eyeTransform === 404 ? 0 : data.eyeTransform;
    var eyeL = canvasW / 2 - inter - 140;
    var eyeR = canvasW / 2 + inter - 140;
    ctx.beginPath();
    ctx.translate(eyeTransform, 0);
    ctx.arc(eyeL, 90, w, 0, 2 * Math.PI);
    ctx.arc(eyeR, 90, w, 0, 2 * Math.PI);
    ctx.moveTo(eyeR, 60);
    ctx.setStrokeStyle('black');
    ctx.setLineWidth(3);
    ctx.stroke();
    ctx.fill();
  },
  drawBody(ctx) {
    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 50;
    var eyeTransform = data.eyeTransform > 0 ? data.eyeTransform : -data.eyeTransform;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var centerX = canvasW / 2;
    ctx.beginPath();
    ctx.translate(0, eyeTransform);
    ctx.arc(centerX, 130, w, 0, 2 * Math.PI);
    ctx.setStrokeStyle('black');
    ctx.setLineWidth(4);
    ctx.stroke();
    ctx.setFillStyle('white')
    ctx.fill();

    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 35;
    var eyeTransform = data.eyeTransform > 0 ? data.eyeTransform : -data.eyeTransform;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var centerX = canvasW / 2 + 140;
    ctx.beginPath();
    ctx.translate(0, eyeTransform);
    ctx.arc(centerX, 130, w, 0, 2 * Math.PI);
    ctx.setStrokeStyle('black');
    ctx.setLineWidth(4);
    ctx.stroke();
    ctx.setFillStyle('white')
    ctx.fill();

    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 35;
    var eyeTransform = data.eyeTransform > 0 ? data.eyeTransform : -data.eyeTransform;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var centerX = canvasW / 2 - 140;
    ctx.beginPath();
    ctx.translate(0, eyeTransform);
    ctx.arc(centerX, 130, w, 0, 2 * Math.PI);
    ctx.setStrokeStyle('black');
    ctx.setLineWidth(4);
    ctx.stroke();
    ctx.setFillStyle('white')
    ctx.fill();
  },
  drawFoot(ctx) {
    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 20;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var centerXL = canvasW / 2 - 22;
    var centerXR = canvasW / 2 + 22;
    ctx.beginPath();
    ctx.scale(1, 1.5);
    ctx.arc(centerXL, 120, w, 0, 2 * Math.PI);
    ctx.arc(centerXR, 120, w, 0, 2 * Math.PI);
    ctx.setStrokeStyle('black');
    ctx.setLineWidth(4);
    ctx.stroke();
    ctx.setFillStyle('white');
    ctx.fill();

    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 10;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var centerXL = canvasW / 2 - 22 + 140;
    var centerXR = canvasW / 2 + 22 + 140;
    ctx.beginPath();
    ctx.scale(1, 1.5);
    ctx.arc(centerXL, 110, w, 0, 2 * Math.PI);
    ctx.setStrokeStyle('black');
    ctx.setLineWidth(4);
    ctx.stroke();
    ctx.setFillStyle('white');
    ctx.fill();
    ctx.beginPath();
    ctx.arc(centerXR, 110, w, 0, 2 * Math.PI);
    ctx.setStrokeStyle('black');
    ctx.setLineWidth(4);
    ctx.stroke();
    ctx.setFillStyle('white');
    ctx.fill();

    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 10;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var centerXL = canvasW / 2 - 22 - 140;
    var centerXR = canvasW / 2 + 22 - 140;
    ctx.beginPath();
    ctx.scale(1, 1.5);
    ctx.arc(centerXL, 110, w, 0, 2 * Math.PI);
    ctx.setStrokeStyle('black');
    ctx.setLineWidth(4);
    ctx.stroke();
    ctx.setFillStyle('white');
    ctx.fill();
    ctx.beginPath();
    ctx.arc(centerXR, 110, w, 0, 2 * Math.PI);
    ctx.setStrokeStyle('black');
    ctx.setLineWidth(4);
    ctx.stroke();
    ctx.setFillStyle('white');
    ctx.fill();
  },
  drawHand(ctx, type) {
    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 20;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var eyeTransform = data.eyeTransform;
    var eyeTransmove = data.eyeTransform > 0 ? data.eyeTransform : -data.eyeTransform;
    var centerXL = -35;
    var centerXR = 35;
    var instance = 0;
    if (type === "l") {
      ctx.beginPath();
      instance = eyeTransform <= 0 ? eyeTransform : 0;
      ctx.translate(canvasW / 2 + instance, canvasH / 2);
      ctx.rotate(-15 * Math.PI / 180);
      ctx.scale(1, 1.5);
      ctx.arc(centerXL, -10, w, 0, 2 * Math.PI);
      ctx.setLineWidth(4);
      ctx.stroke();
      ctx.setFillStyle('white');
      ctx.fill();
    } else if (type === "r") {
      ctx.beginPath();
      instance = eyeTransform > 0 ? eyeTransform : 0;
      ctx.translate(canvasW / 2 + instance, canvasH / 2);
      ctx.rotate(15 * Math.PI / 180);
      ctx.scale(1, 1.5);
      ctx.arc(centerXR, -10, w, 0, 2 * Math.PI);
      ctx.setStrokeStyle('black');
      ctx.setLineWidth(4);
      ctx.stroke();
      ctx.setFillStyle('white');
      ctx.fill();
    }

    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 13;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var eyeTransform = data.eyeTransform;
    var eyeTransmove = data.eyeTransform > 0 ? data.eyeTransform : -data.eyeTransform;
    var centerXL = 115;
    var centerXR = 160;
    var instance = 0;
    if (type === "l") {
      ctx.beginPath();
      instance = eyeTransform <= 0 ? eyeTransform : 0;
      ctx.translate(canvasW / 2 + instance, canvasH / 2);
      ctx.rotate(-15 * Math.PI / 180);
      ctx.scale(1, 1.5);
      ctx.arc(centerXL, 10, w, 0, 2 * Math.PI);
      ctx.setLineWidth(4);
      ctx.stroke();
      ctx.setFillStyle('white');
      ctx.fill();
    } else if (type === "r") {
      ctx.beginPath();
      instance = eyeTransform > 0 ? eyeTransform : 0;
      ctx.translate(canvasW / 2 + instance, canvasH / 2);
      ctx.rotate(15 * Math.PI / 180);
      ctx.scale(1, 1.5);
      ctx.arc(centerXR, -35, w, 0, 2 * Math.PI);
      ctx.setStrokeStyle('black');
      ctx.setLineWidth(4);
      ctx.stroke();
      ctx.setFillStyle('white');
      ctx.fill();
    }

    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 13;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var eyeTransform = data.eyeTransform;
    var eyeTransmove = data.eyeTransform > 0 ? data.eyeTransform : -data.eyeTransform;
    var centerXL = -160;
    var centerXR = -110;
    var instance = 0;
    if (type === "l") {
      ctx.beginPath();
      instance = eyeTransform <= 0 ? eyeTransform : 0;
      ctx.translate(canvasW / 2 + instance, canvasH / 2);
      ctx.rotate(-15 * Math.PI / 180);
      ctx.scale(1, 1.5);
      ctx.arc(centerXL, -35, w, 0, 2 * Math.PI);
      ctx.setLineWidth(4);
      ctx.stroke();
      ctx.setFillStyle('white');
      ctx.fill();
    } else if (type === "r") {
      ctx.beginPath();
      instance = eyeTransform > 0 ? eyeTransform : 0;
      ctx.translate(canvasW / 2 + instance, canvasH / 2);
      ctx.rotate(15 * Math.PI / 180);
      ctx.scale(1, 1.5);
      ctx.arc(centerXR, 15, w, 0, 2 * Math.PI);
      ctx.setStrokeStyle('black');
      ctx.setLineWidth(4);
      ctx.stroke();
      ctx.setFillStyle('white');
      ctx.fill();
    }
  },
  drawInitHand(ctx, type) {
    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 20;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var eyeTransmove = data.eyeTransform > 0 ? data.eyeTransform : -data.eyeTransform;
    var centerXL = -35;
    var centerXR = 35;
    if (type === "l") {
      ctx.beginPath();
      ctx.translate(canvasW / 2, canvasH / 2);
      ctx.rotate(15 * Math.PI / 180);
      ctx.scale(1, 1.5);
      ctx.translate(0, eyeTransmove);
      ctx.arc(centerXL, 10, w, 0, 2 * Math.PI);
      ctx.setLineWidth(4);
      ctx.stroke();
      ctx.setFillStyle('white');
      ctx.fill();
    } else if (type === "r") {
      ctx.beginPath();
      ctx.translate(canvasW / 2, canvasH / 2);
      ctx.rotate(-15 * Math.PI / 180);
      ctx.scale(1, 1.5);
      ctx.translate(0, eyeTransmove);
      ctx.arc(centerXR, 10, w, 0, 2 * Math.PI);
      ctx.setStrokeStyle('black');
      ctx.setLineWidth(4);
      ctx.stroke();
      ctx.setFillStyle('white');
      ctx.fill();
    }

    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 13;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var eyeTransmove = data.eyeTransform > 0 ? data.eyeTransform : -data.eyeTransform;
    var centerXL = -40 + 140;
    var centerXR = 35 + 140;
    if (type === "l") {
      ctx.beginPath();
      ctx.translate(canvasW / 2, canvasH / 2);
      ctx.rotate(15 * Math.PI / 180);
      ctx.scale(1, 1.5);
      ctx.translate(0, eyeTransmove);
      ctx.arc(centerXL, -40, w, 0, 2 * Math.PI);
      ctx.setLineWidth(4);
      ctx.stroke();
      ctx.setFillStyle('white');
      ctx.fill();
    } else if (type === "r") {
      ctx.beginPath();
      ctx.translate(canvasW / 2, canvasH / 2);
      ctx.rotate(-15 * Math.PI / 180);
      ctx.scale(1, 1.5);
      ctx.translate(0, eyeTransmove);
      ctx.arc(centerXR, 10, w, 0, 2 * Math.PI);
      ctx.setStrokeStyle('black');
      ctx.setLineWidth(4);
      ctx.stroke();
      ctx.setFillStyle('white');
      ctx.fill();
    }

    ctx.restore();
    ctx.save();
    var data = this.data;
    var w = 13;
    var canvasW = data.canvasW;
    var canvasH = data.canvasH;
    var eyeTransmove = data.eyeTransform > 0 ? data.eyeTransform : -data.eyeTransform;
    var centerXL = -35 - 140;
    var centerXR = 45 - 140;
    if (type === "l") {
      ctx.beginPath();
      ctx.translate(canvasW / 2, canvasH / 2);
      ctx.rotate(15 * Math.PI / 180);
      ctx.scale(1, 1.5);
      ctx.translate(0, eyeTransmove);
      ctx.arc(centerXL, 10, w, 0, 2 * Math.PI);
      ctx.setLineWidth(4);
      ctx.stroke();
      ctx.setFillStyle('white');
      ctx.fill();
    } else if (type === "r") {
      ctx.beginPath();
      ctx.translate(canvasW / 2, canvasH / 2);
      ctx.rotate(-15 * Math.PI / 180);
      ctx.scale(1, 1.5);
      ctx.translate(0, eyeTransmove);
      ctx.arc(centerXR, -40, w, 0, 2 * Math.PI);
      ctx.setStrokeStyle('black');
      ctx.setLineWidth(4);
      ctx.stroke();
      ctx.setFillStyle('white');
      ctx.fill();
    }
  },
  copy() {
    var data = this.data.content;
    wx.setClipboardData({
      data: data,
      success: function () {
        wx.showToast({
          title: '非常感谢！！',
        })
      }
    })
  }
})