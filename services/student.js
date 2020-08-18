const moment = require('moment')
const _ = require('lodash')
const { insertOne,find } = require('../models/student')

/*
 * 增加学生
 */
async function addStudent(data){

  // 。。。
  const { name } = data

  let result = { status : 'success'}

  if(name){

    // 插入数据库
    await insertOne(data)
  }else{

    result.status = 'falied'
    result.message = '没有用户名'
  }

  return result
}


/* 
 * 获取学生
*/
async function getStudent(data){

  let students = await find(data)

  students = _.map(students,(item)=>{

    item.gender = item.gender == '1' ? '男' : '女'
    return item
  })

  return students
}


module.exports = {

  addStudent,
  getStudent
}