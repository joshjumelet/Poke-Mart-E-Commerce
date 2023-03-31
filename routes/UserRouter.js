const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUsers
)

Router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

Router.get(
  '/details/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserDetails
)

Router.post('/register', controller.RegisterUser)

Router.post('/login', controller.LoginUser)

Router.put(
  '/update_password/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)

Router.put(
  '/update_profile/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateUser
)

Router.delete(
  '/delete/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteUser
)

module.exports = Router
