const services = require('../services/student')

/* 
 *  student 页面
*/
async function student(ctx,next){

  await ctx.render('students')
}

/* 
 * 增加学生
*/
async function addStudent(ctx,next){

  const data = ctx.request.body

  //添加学生
  let result = await services.addStudent(data)

  ctx.response.body = result
 
}


module.exports = {
  student,
  addStudent
}