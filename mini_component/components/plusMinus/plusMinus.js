// components/component-tag-name.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    myCount:{
      type: Number, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {
       
      }
    },
    operaType: {
      type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 'operaCount', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    myCount:0,
    operaType:'circle'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    plusFn:function(){
      var myEventDetail = {
        opreation:'plus'
      } // detail对象，提供给事件监听函数
      var myEventOption = {

      } // 触发事件的选项
      this.triggerEvent('operation', myEventDetail, myEventOption)
    },
    minusFn:function(){
      var myEventDetail = {
        opreation: 'minus'
      } // detail对象，提供给事件监听函数
      var myEventOption = {

      } // 触发事件的选项
      this.triggerEvent('operation', myEventDetail, myEventOption)
    },
    changeFn:function(event){
      var oldCount = this.data.myCount;
      var count=event.detail.value;
      var reg = /^(0|[1-9]\d*)$/;
      if(!reg.test(count)){
        wx.showToast({
          title: '请输入数字',
          icon:'none'
        })
        this.setData({
          "myCount": oldCount
        })
        return;
      }
      var myEventDetail = {
        opreation: 'change',
        count: count
      } // detail对象，提供给事件监听函数
      var myEventOption = {

      } // 触发事件的选项
      this.triggerEvent('operation', myEventDetail, myEventOption)
    }
  },
  externalClasses:[
    'click-hover'
  ]
})