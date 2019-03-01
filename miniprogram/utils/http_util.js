/**
 * 用promise封装仅供本项目使用,放到其他项目需要修改
 * url地址
 * isLoading：bol值是否显示loading
 * page对象
 * app，应用对象
 * needsAuth：bol值是否需要授权
 * callback成功回调可以写处理数据方法，最好用在promiseall中，单个get方法最好不用callback用他对象then方法
 */
import Promise from './es6_promise.js'
function timeFn(fn,delay){
  return new Promise((res,rej)=>{
    setTimeout(function(){
      var result = fn();
      res(result);
    },delay);
  })
}
function Get(url, isLoading, page,app, callback) {
  if (isLoading){
    page.setData({
      isLoading: true
    })
  }
  return getPromisenoauth(url,callback);
}
/**
 * 封装post方法
 */
function Post(url, data, isLoading, page, app, needsAuth, callback) {
    return postpromisenoauth(url, data, callback);
}
/**
 * 封装delete方法
 */
function Delete(url, isLoading, page, app, needsAuth, callback){
    return deletePromisenoauth(url, callback);
}
function deletePromisenoauth(url, callback) {
  return new Promise((res, rej) => {
    wx.request({
      url: url,
      method: 'DELETE',
      success: function (result) {
        var data = result.data;
        var msg = data.msg;
          if (!!callback) {
            callback(msg);
          }
          res(msg);
      },
      fail: function () {
        rej('发生错误');
      }
    })
  });
}

function getPromisenoauth(url, callback) {
  return new Promise((res, rej) => {
    wx.request({
      url: url,
      method: 'GET',
      success: function (result) {
        var data = result.data;
          if (!!callback) {
            callback(data.result);
          }
          res(data);
      },
      fail: function () {
        rej('发生错误');
      }
    })
  });
}
function postpromisenoauth(url, data, callback) {
  return new Promise((res, rej) => {
    wx.request({
      url: url,
      method: 'POST',
      data: data,
      success: function (result) {
        var data = result.data;
        var msg = data.msg;
          if (!!callback) {
            callback(data.result)
          }
          res(data.result || msg);
      },
      fail: function () {
        rej('发生错误')
      }
    })
  })
}
//等到所有异步函数都执行完触发事件，arr数组都是promise对象
function promiseAll(arr, callback, page) {
  page.setData({
    isLoading: true
  });
  Promise.all(arr).then((val) => {
    page.setData({
      isLoading: false
    })
    callback(val)
  }).catch((val) => {
    page.setData({
      isLoading: false
    })
    val=!!val?val:"发生错误";
    wx.showToast({
      title: val,
      icon: 'none',
    })
  })
}
module.exports = {
  Get: Get,
  Post: Post,
  PromiseAll: promiseAll,
  Delete: Delete,
  TimeFn: timeFn
}