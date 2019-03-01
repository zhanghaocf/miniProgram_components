// pages/love/love.js
const app=getApp();
import apiPromise from '../../utils/wxapiToPromise.js';
import httpUrl from '../../utils/http_util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winW:0,
    scale:0.2,//固定不用修改
    points:[],
    isLoading:false,
    step:0,
    rundelay:150,
    cot:[
      {
        id:1,
        text:'3',
        lifetime:1000
      },
      {
        id:2,
        text: '2',
        lifetime: 1000
      },
      {
        id:3,
        text: '1',
        lifetime: 1000
      },
      {
        id:4,
        text: 'I ❤ U',
        lifetime: 1500
      },
      {
        id: 5,
        text: '不要难过',
        lifetime: 1500
      },
      {
        id: 6,
        text: '总会过去',
        lifetime: 1500
      }
    ],
    ball:{
      count:800,
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var screnw = wx.getSystemInfoSync().windowWidth;
    this.setData({
      winW: screnw
    },this.init)
  },
  init(){
    this.getPoints();
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
  getPoints(){
    //this.drawCont();
    var cot=this.data.cot;
    var ths=this;
    var asyncArr=[];
    cot.map((item)=>{
      asyncArr.push(ths.drawCont(item));
    })
    httpUrl.PromiseAll(asyncArr,(res)=>{
      res.map((obj)=>{
        this.fenpei(obj);
      });
      ths.data.points=res;
      ths.drawMain();
    },this);
  },
  //随机
  random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  },
  //将小球随机分配
  fenpei(pointObj){
    var count=this.data.ball.count;
    var pointArr=pointObj.point;
    var len = pointArr.length;
    var beishu=Math.floor(count/len);
    var yu=count%len;
    var arr=[];
    var ths=this;
    for(var i=0;i<beishu;i++){
      arr = arr.concat(pointArr)
    }
    for(var j=0;j<yu;j++){
      arr.push(pointArr[ths.random(0,len-1)])
    }
    pointObj.point=arr;
  },
  drawMain(){
    //bol为true时代表第一次渲染
    var po = this.data.points;
    var point = po[0];
    var nextPoint = po.length >= 2 ? po[1]:po[0];
    this.data.step+=4;

    this.showContent(point);
    this.move(point);

    if (this.data.step >= point.lifetime){
        this.data.points.shift();
        //TODO:需要操作
        if(this.data.points.length<=2){
          this.moveWay(point, nextPoint);
        }
        console.log("下一个");
        this.data.step = 0;
    }
    var len = this.data.points.length;
    if(len>0){
      setTimeout(this.drawMain,4);
    }
  },
  moveWay(point,np){
    var rundelay = this.data.rundelay;
    var lifetime = np.lifetime;
    for(var i=0,len=point.point.length;i<len;i++){
      var obj=point.point[i];
      var nObj = np.point[i];
      if (nObj){
        nObj.x = obj.x;
        nObj.y = obj.y;
        nObj.vx = (nObj.cx - nObj.x) / rundelay;
        nObj.vy = (nObj.cy - nObj.y) / rundelay;
      }
    }
  },
  drawCont(obj){
    const winW = this.data.winW;
    var ctx = wx.createCanvasContext('canvas'+obj.id);
    ctx.clearRect(0, 0, winW, 60);
    var scale = this.data.scale;
    // ctx.font = 'bold 10px Arial';
    ctx.setFontSize(10);
    const metrics = ctx.measureText(obj.text);
    const vfw = metrics.width;
    const fsize = Math.min(60 * 0.8, winW * 0.8 * scale * 10 / vfw);
    ctx.setFontSize(fsize);
    const left = (winW * scale - ctx.measureText(obj.text).width) / 2;
    const top = (60 + fsize) / 2;
    ctx.fillText(obj.text, left, top);
    ctx.draw();
    return this.getPointData('canvas'+obj.id, obj);
  },
  getPointData(canvasId, obj){
    const winW = this.data.winW;
    const ths=this;
    var scale = this.data.scale;
    return httpUrl.TimeFn(function(){
      return apiPromise.proxy.canvasGetImageData({
        canvasId: canvasId,
        x: 0,
        y: 0,
        width: winW * scale,
        height: 60,
      }).then(res => {
        return ths.getpostion(res, obj.lifetime);
      })
    },obj.id * 100);
  },
  //获取像素坐标值
  getpostion(data, lifetime){
    //console.log(this.data.cot.length);
    var rundelay = this.data.rundelay;
    var scale = this.data.scale;
    var point = [];
    var obj={};
    var x=this.data.winW/2;
    var pdata=data.data;
    for (var i = 0, len = pdata.length; i < len; i++) {
      if (pdata[i * 4 + 3]) {
        var cx = (i % data.width) / scale;
        var cy = (i / data.width) / scale;
        var vx = (cx - x) / rundelay;//保证在这段时间中动画执行完成，4ms每幁
        var vy = (cy - 150) / rundelay;
        point.push({
          x: x,
          y: 150,
          vx: vx,
          vy: vy,
          cx: cx,
          cy: cy,
        })
      }
    }
    obj.point=point;
    obj.lifetime = lifetime;
    return obj;
  },
  //复制
  showContent(point){
    var ctx = wx.createCanvasContext('mainCanvas');
    var winW=this.data.winW;
    ctx.clearRect(0, 0, winW,300);
    ctx.setFillStyle('pink');
    point.point.map(item=>{
      ctx.fillText('❤',item.x,item.y);
    })
    ctx.draw();
  },
  //点动
  move(point){
    point.point.map(item => {
      item.x += item.vx;
      item.y += item.vy;
      if(item.vx>0){
        item.x=item.x>item.cx?item.cx:item.x;
      }else{
        item.x = item.x < item.cx ? item.cx : item.x;
      }
      if (item.vy > 0) {
        item.y = item.y > item.cy ? item.cy : item.y;
      } else {
        item.y = item.y < item.cy ? item.cy : item.y;
      }
        
    })
  },
  //创建1500个点
})