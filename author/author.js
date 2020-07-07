Component({
  properties: {
    needAuthor:{
      type:Boolean,
      value:true
    },
    imgurl:{
      type:String,
      value:''
    },
    name:{
      type:String,
      value:'小程序名称'
    },
    info:{
      type:String,
      value:'您暂未获取微信授权，将无法正常使用小程序的绑定功能~如需要正常使用，请点击”授权绑定“按钮'
    },
    btnText:{
      type:String,
      value:'授权绑定'
    }
  },
  data: {

  },
  methods: {
    getuserinfo(e){
      let {iv} = e.detail
      iv && this.triggerEvent('userinfo',e.detail,{})
    },
    fn(){
      this.triggerEvent('userinfo',{},{})
    }
  }
})
