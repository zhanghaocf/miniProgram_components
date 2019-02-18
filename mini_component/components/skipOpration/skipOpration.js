Component({
  properties:{
    needShare:{
      type:Boolean,
      value:true,
      observer: function (newVal, oldVal, changedPath) {
        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
        // 通常 newVal 就是新设置的数据， oldVal 是旧数据
        if (newVal===oldVal){
          return;
        }
        let maxSkipDistance=300;
        if (!newVal){
            maxSkipDistance=150
        }
        this.setData({
          maxSkipDistance: maxSkipDistance
        })
      }
    },
    index:{
      type:Number,
      value:0
    },
    skipHeight:{
      type:Number,
      value: 300
    },
    margBo:{
      type:Number,
      value:15
    },
    //不是选中哪个index，只是为了让列表只有一个可以弹出菜单设置的变量
    selectIndex:{
      type:Number,
      value:-1,
      observer: function (newVal, oldVal, changedPath) {
      }
    }
  },
  data:{
    maxSkipDistance:300,
    tranX:0,
    startX:0,
    isMove:false,
    transStyle: 'transition:transform 0.3s linear;-webkit-transition: -webkit-transform 0.3s linear',
    isSame:false,
    wxversion:wx.getSystemInfoSync().SDKVersion
  },
  methods:{
    startTouch(e) {
      // console.log(e.touches[0].pageX);
      //console.log(e.currentTarget.dataset.index);
      var index = e.currentTarget.dataset.index;
      var selectIndex = this.data.selectIndex;
      console.log(selectIndex);
      if (selectIndex === index){
        this.setData({
          isSame:true,
          startX: e.touches[0].pageX
        });
        return;
      }
      this.setData({
        startX: e.touches[0].pageX,
        isSame: false,
        isMove: true,
      });
      var myEventDetail = {
        selectIndex: -1,
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('independenceFn', myEventDetail, myEventOption)
    },
    moveTouch(e) {
      var data = this.data;
      var startX = data.startX;
      var pageX = e.touches[0].pageX;
      var index = e.currentTarget.dataset.index;
      var maxSkipDistance = data.maxSkipDistance;
      var isSame = data.isSame;
      var distance = pageX - startX;
      if (distance < 0 && !isSame) {
        distance = distance <= -maxSkipDistance ? -maxSkipDistance : distance;
        this.setData({
          tranX: distance,
          selectIndex: index
        })
      }
    },
    endTouch(e) {
      var data = this.data;
      var startX = data.startX;
      var isSame = data.isSame;
      var pageX = e.changedTouches[0].pageX;
      var maxSkipDistance = data.maxSkipDistance;
      var distance = pageX - startX;
      //console.log(distance)
      var obj = {};
      var defaultval = isSame ? 0 : -80;
        if (distance > defaultval) {
          obj = {
            selectIndex: -1
          }
        } else {
          obj = {
            tranX: -maxSkipDistance,
          }
        }
      obj.isMove = false;
      this.setData(obj)
    },
    shareFn(e) {
      const index=e.currentTarget.dataset.index;
      var myEventDetail = {
        index: index
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('shareFn', myEventDetail, myEventOption)
    },
    delFn(e) {
      const index = e.currentTarget.dataset.index;
      var myEventDetail = {
        index: index
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('deleteFn', myEventDetail, myEventOption)
    },
    wxsSetIndex(obj){
      let {index} = obj;
      var myEventDetail = {
        selectIndex: index,
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('independenceFn', myEventDetail, myEventOption)
    }
  }
})