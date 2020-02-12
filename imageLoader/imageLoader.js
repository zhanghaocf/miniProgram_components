Component({
  externalClasses: ['zhloadimgclass'],
  data: {
    loadbol: false
  },
  properties:{
    defaultSource:{
      type:String,
      value:''
    },
    src:{
      type:String,
      value:''
    },
    mode:{
      type:String,
      value:'scaleToFill'
    }
  },
  methods:{
    loadFn(){
      console.log("加载好啦");
      this.setData({
        loadbol:true
      })
    }
  }
})