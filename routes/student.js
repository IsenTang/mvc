const controller = require('../controller/student')

module.exports = (router)=> {
  
  router.get('/student', controller.student)

  
  router.post('/student',controller.addStudent)


  router.get('/student/getStudents',controller.getStudents)

}