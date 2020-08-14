const { checkName:checkRegName} = require('../common/utils')
const model= require('../models/user')

async function checkName(name){

  let data = {flag : true}
    // 正则检查
  if(checkRegName(name)){

    // 用户名是否重复
    let result = await model.findOne({ name })

    if(result){
      data.flag = false
      data.message = '用户名重复'
    }

  }else{
    data.flag = false
    data.message = '用户名不符合要求'
  }

  return data
}

/* 
 * 注册
 */
async function regist(name,password){

  await model.insertOne({ name, password} )
}

module.exports = {
  checkName,
  regist
}