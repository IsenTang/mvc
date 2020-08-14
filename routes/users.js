
const controller = require('../controller/users')

module.exports = function (router) {

  router.get('/user/welcome', controller.welcome)

}
