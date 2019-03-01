// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  try{
    const {messageId} =event
    const data=await db.collection('timao').where({
      _id: messageId
    }).get();
    return data;
  }catch(e){
    console.error(e);
  }
}