const Router = require('express').Router()
const controller = require('../controllers/ProductController')
const middleware = require('../middleware')

Router.get('/', controller.GetProducts)

Router.get('/:product_id', controller.GetProductDetails)

Router.get('/find-product', controller.FindProduct)

Router.post(
  '/create',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateProduct
)

Router.put(
  '/update/:product_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateProduct
)

Router.delete(
  '/delete/:product_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteProduct
)

module.exports = Router
