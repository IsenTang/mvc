const services = require('../services/user')

const { checkPassword } = require('../common/utils')

async function user(ctx,next){

  await ctx.render('user')
}


async function checkName(ctx,next){

  const { name } = ctx.request.body

  let data = await services.checkName(name)

  ctx.response.body = data
}


async function regist(ctx,next){

  const { name,password } = ctx.request.body

  let data = { status : 'success'}

  // 检测用户名是否符合要求
  let result = await services.checkName(name)

  if(result.flag){
    if(checkPassword(password)){
      await services.regist(name,password)
    }else{

      data.status = 'failed'
      data.message = '密码不符合要求'
    }
  }else{
    data.status = 'failed'
    data.message = result.message
  }

  ctx.response.body = data
}



module.exports = {
  user,
  checkName,
  regist
}