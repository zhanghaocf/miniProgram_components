//index.js
//获取应用实例
const app = getApp()
const apiproxy=require('../../utils/wxapiToPromise.js');
Page({
  data: {
   list:[
     {
       id:1,
       name:'component-zxLoading',
       url:'/pages/loading/loading'
     },
     {
       id: 2,
       name: 'coolBanner',
       url: '/pages/coolBanner/coolBanner'
     },
     {
       id:3,
       name:'plusMinus',
       url:'/pages/plusMinus/plusMinus'
     },
     {
       id:4,
       name:'skipOperation',
       url:'/pages/skipOperation/skipOperation'
     },
     {
       id:5,
       name:'upPullData',
       url:'/pages/scrollView/scrollView'
     },
     {
       id: 6,
       name: 'classify',
       url: '/pages/classify/classify'
     },
     {
       id: 7,
       name: 'imageLoader',
       url: '/pages/loadimg/loadimg'
     },
     {
       id:8,
       name: '画板字自动换行',
       url: '/pages/cas/cas'
     },
     {
       id:9,
       name: '通用授权页面',
       url:'/pages/userinfo/userinfo'
     }
   ]
  },
  onLoad: function () {
  }
})
