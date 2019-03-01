// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    const { message, userInfo}=event
    const resultCount=await db.collection('timao').where({
      _openid: userInfo.openId
    }).get();
    if (!!resultCount.data[0]._id){
      //更新
      var data= await db.collection('timao').where({
        _openid: userInfo.openId
      }).update({
        data:{
          message: message
        }
      }).then(res=>{
        console.log(res);
        return res;
      })
      data._id = resultCount.data[0]._id;
      return data
    }else{
      //添加
      return await db.collection('timao').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          message: message,
          _openid: userInfo.openId
        }
      }).then(res => {
        console.log(res);
        return res;
      })
    }
  }catch(e){
    console.error(e)
  }
}