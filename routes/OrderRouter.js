const Router = require('express').Router()
const controller = require('../controllers/OrderController')
const middleware = require('../middleware')

Router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetOrders
)

Router.get(
  '/:order_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetOrderDetails
)

Router.get(
  '/:user_id/orders',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetUserOrders
)

Router.post(
  '/:product_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateOrder
)

Router.put(
  '/:order_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateOrder
)

Router.delete(
  '/:order_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteOrder
)

module.exports = Router
