Component({
  properties: {
    bannerList: Object,
    swiperHeight: {
      type: Number,
      value: 1000,
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
      }
    },
    dotshow:{
      type:Boolean,
      value:true
    },
    circle: {
      type: Boolean,
      value: true
    },
    autoplay:{
      type:Boolean,
      value:true
    }
  },
  data: {
    swiperIndex: 0
  },
  methods: {
    changeSwip(e) {
      this.setData({
        swiperIndex: e.detail.current
      })
    },
    linkto(e) {
      var url = e.currentTarget.dataset.url;
      if (!url) {
        return;
      }
      wx.navigateTo({
        url: url,
      })
    }
  }
})