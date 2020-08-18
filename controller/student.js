const services = require('../services/student')

/* 
 *  student 页面
*/
async function student(ctx,next){

  const data = ctx.request.query

  const students = await services.getStudent(data)

  ctx.state = {
    students
  }

  await ctx.render('students',ctx.state)
}

/* 
 * 增加学生
*/
async function addStudent(ctx,next){

  const data = ctx.request.body

  //添加学生
  let result = await services.addStudent(data) // ==> { status: 'success'}

  result.students = await services.getStudent({})

  ctx.response.body = result
 
}

async function getStudents(ctx,next){

  const { gender } = ctx.request.query

  const students = await services.getStudent({ gender })

  ctx.response.body = {
    students
  }
}


module.exports = {
  student,
  addStudent,
  getStudents
}