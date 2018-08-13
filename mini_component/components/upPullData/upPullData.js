Component({
  /**
   * 组件的属性列表
   */
  properties: {
    scrollViewHeight: {
      type: Number, //该属性设置scrollview组件高度
      value: 0, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {

      }
    },
    showLoading: {
      type: Boolean, //该属性设置是否显示loading
      value: false, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {
        this.setData({
          isLoading: newVal
        })
      }
    },
    lowerThreshold:{
      type: Number, //该属性设置scrollview上拉距离底部多少距离触发函数
      value: 10, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {
        
      }
    },
    isFinish:{
      type: Boolean, //该属性设置scrollview上拉距离底部多少距离触发函数
      value: false, // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {

      }
    },
    loadingType:{
      type: String, //该属性设置scrollview上拉距离底部多少距离触发函数
      value: 'Loading0', // 属性初始值（可选），如果未指定则会根据类型选择一个
      observer: function (newVal, oldVal, changedPath) {

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollViewHeight:0,
    isLoading:false,
    lowerThreshold:0,
    isFinish:false,
    loadingType:'Loading0'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getList: function () {
      var myEventDetail = {
        
      } // detail对象，提供给事件监听函数
      var myEventOption = {

      } // 触发事件的选项
      this.triggerEvent('getList', myEventDetail, myEventOption)
    }
  }
})