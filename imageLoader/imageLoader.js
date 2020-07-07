Component({
  externalClasses: ['zhloadimgclass'],
  data: {
    loadbol: false,
    msg:'load'
  },
  properties:{
    src:{
      type:String,
      value:''
    },
    mode:{
      type:String,
      value:'scaleToFill'
    },
    lazyload:{
      type:Boolean,
      value:false
    }
  },
  methods:{
    errorfn(){
      this.setData({
        msg:'error'
      })
    },
    loadFn(){
      // console.log("加载好啦");
      this.setData({
        loadbol:true
      })
    }
  }
})