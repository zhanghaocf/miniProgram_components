// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wrapheight:0,
    activeIndex:0,
    activemenu:-1,
    activemenu2:-1,//右边物品选中暂时用两个变量来解决，activemenu2来存储activeIndex的值，直接用activeIndex值的话，你选中一个物品滑动页面这个activeIndex会变的所以不合适
    list:[{
      id:1,
      type:'会记',
      children:[
        {
          id:1,
          name:'理视一体胡',
          img:'/imgs/banner1.jpg'
        },
        {
          id: 2,
          name: '理视一体胡',
          img: '/imgs/banner2.jpg'
        },
        {
          id: 3,
          name: '理视一体胡',
          img: '/imgs/banner3.jpg'
        },
        {
          id: 4,
          name: '理视一体胡',
          img: '/imgs/banner4.jpg'
        },
        {
          id: 5,
          name: '理视一体胡',
          img: '/imgs/banner5.jpg'
        },
        {
          id: 6,
          name: '理视一体胡',
          img: '/imgs/banner4.jpg'
        },
        {
          id: 7,
          name: '理视一体胡',
          img: '/imgs/banner3.jpg'
        },
        {
          id: 8,
          name: '理视一体胡',
          img: '/imgs/banner2.jpg'
        }
      ]
    },
    {
      id: 2,
      type: '资格证',
      children: [
        {
          id: 1,
          name: '理视一体胡',
          img: '/imgs/banner1.jpg'
        },
        {
          id: 2,
          name: '理视一体胡',
          img: '/imgs/banner2.jpg'
        },
        {
          id: 3,
          name: '理视一体胡',
          img: '/imgs/banner3.jpg'
        },
        {
          id: 4,
          name: '理视一体胡',
          img: '/imgs/banner4.jpg'
        },
        {
          id: 5,
          name: '理视一体胡',
          img: '/imgs/banner5.jpg'
        },
        {
          id: 6,
          name: '理视一体胡',
          img: '/imgs/banner4.jpg'
        },
        {
          id: 7,
          name: '理视一体胡',
          img: '/imgs/banner3.jpg'
        },
        {
          id: 8,
          name: '理视一体胡',
          img: '/imgs/banner2.jpg'
        }
      ]
    },
      {
        id: 3,
        type: '电脑',
        children: [
          {
            id: 1,
            name: '理视一体胡',
            img: '/imgs/banner1.jpg'
          },
          {
            id: 2,
            name: '理视一体胡',
            img: '/imgs/banner2.jpg'
          },
          {
            id: 3,
            name: '理视一体胡',
            img: '/imgs/banner3.jpg'
          },
          {
            id: 4,
            name: '理视一体胡',
            img: '/imgs/banner4.jpg'
          },
          {
            id: 5,
            name: '理视一体胡',
            img: '/imgs/banner5.jpg'
          },
          {
            id: 6,
            name: '理视一体胡',
            img: '/imgs/banner4.jpg'
          },
          {
            id: 7,
            name: '理视一体胡',
            img: '/imgs/banner3.jpg'
          },
          {
            id: 8,
            name: '理视一体胡',
            img: '/imgs/banner2.jpg'
          }
        ]
      },
      {
        id: 4,
        type: '自考',
        children: [
          {
            id: 1,
            name: '理视一体胡',
            img: '/imgs/banner1.jpg'
          },
          {
            id: 2,
            name: '理视一体胡',
            img: '/imgs/banner2.jpg'
          },
          {
            id: 3,
            name: '理视一体胡',
            img: '/imgs/banner3.jpg'
          },
          {
            id: 4,
            name: '理视一体胡',
            img: '/imgs/banner4.jpg'
          },
          {
            id: 5,
            name: '理视一体胡',
            img: '/imgs/banner5.jpg'
          },
          {
            id: 6,
            name: '理视一体胡',
            img: '/imgs/banner4.jpg'
          },
          {
            id: 7,
            name: '理视一体胡',
            img: '/imgs/banner3.jpg'
          },
          {
            id: 8,
            name: '理视一体胡',
            img: '/imgs/banner2.jpg'
          }
        ]
      },
      {
        id: 5,
        type: '成考',
        children: [
          {
            id: 1,
            name: '理视一体胡',
            img: '/imgs/banner1.jpg'
          },
          {
            id: 2,
            name: '理视一体胡',
            img: '/imgs/banner2.jpg'
          },
          {
            id: 3,
            name: '理视一体胡',
            img: '/imgs/banner3.jpg'
          },
          {
            id: 4,
            name: '理视一体胡',
            img: '/imgs/banner4.jpg'
          },
          {
            id: 5,
            name: '理视一体胡',
            img: '/imgs/banner5.jpg'
          },
          {
            id: 6,
            name: '理视一体胡',
            img: '/imgs/banner4.jpg'
          },
          {
            id: 7,
            name: '理视一体胡',
            img: '/imgs/banner3.jpg'
          },
          {
            id: 8,
            name: '理视一体胡',
            img: '/imgs/banner2.jpg'
          }
        ]
      },
      {
        id: 6,
        type: '网教',
        children: [
          {
            id: 1,
            name: '理视一体胡',
            img: '/imgs/banner1.jpg'
          },
          {
            id: 2,
            name: '理视一体胡',
            img: '/imgs/banner2.jpg'
          },
          {
            id: 3,
            name: '理视一体胡',
            img: '/imgs/banner3.jpg'
          },
          {
            id: 4,
            name: '理视一体胡',
            img: '/imgs/banner4.jpg'
          },
          {
            id: 5,
            name: '理视一体胡',
            img: '/imgs/banner5.jpg'
          },
          {
            id: 6,
            name: '理视一体胡',
            img: '/imgs/banner4.jpg'
          },
          {
            id: 7,
            name: '理视一体胡',
            img: '/imgs/banner3.jpg'
          },
          {
            id: 8,
            name: '理视一体胡',
            img: '/imgs/banner2.jpg'
          }
        ]
      }
    ],
    topArr:[],
    slideHeight:0,
    clickbol: false//为了解决左侧点击最后一个右侧滑动因滑动的距离达不到最后一个要求的距离而选中了他上一个或是上上个等问题(手滑动会一直触发scrollmenu，但点击造成的滑动只会触发一次scrollmenu))
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let wrapheight = wx.getSystemInfoSync().windowHeight;
    this.setData({
      wrapheight
    })
  },
  selectLeft(e){
    let index=!!e?e.currentTarget.dataset.index:this.data.activemenu2;
    let topArr = this.data.topArr;
    this.data.clickbol=true;
    this.setData({
      activeIndex:index,
      slideHeight: topArr[index],
    })
  },
  selectdetail(e){
    let arr = e.currentTarget.dataset.index.split('-');
    const data=this.data;
    let activemenu = data.activemenu;
    let activemenu2 = data.activemenu2;
    arr[1] = Number(arr[1]);
    arr[0] = Number(arr[0]);
    if (activemenu === arr[1] && activemenu2 === arr[0]){
      return;
    }
    this.data.activemenu2 = arr[0];
    this.selectLeft();
    this.setData({
      activemenu: arr[1],
      activemenu2:arr[0]
    })
  },
  scrollmenu(e){
    const data=this.data;
    let clickBol = data.clickbol;
    if (clickBol){
      this.data.clickbol=false;
      return;
    }
    let activeIndex = data.activeIndex;
    let topArr = data.topArr;
    let scrollTop = e.detail.scrollTop;
    let slideHeight = data.slideHeight;
    for(let i=0,len=topArr.length;i<len;i++){
      if (scrollTop >= topArr[i]){
        activeIndex=i;
      }else{
        break;
      }
    }
    if (data.activeIndex != activeIndex){
      this.setData({
        activeIndex
      })
    }
    // this.setData({
    //   activeIndex
    // })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let ths=this;
    //封装到组件中写在生命周期ready中
    wx.createSelectorQuery().selectAll('.title').boundingClientRect(function (rects) {
      rects.forEach(function (rect) {
        ths.data.topArr.push(rect.top);
      })
    }).exec()
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