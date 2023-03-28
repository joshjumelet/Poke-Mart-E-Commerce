const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ProductRouter = require('./ProductRouter')
const OrderRouter = require('./OrderRouter')

Router.use('/users', UserRouter)
Router.use('/products', ProductRouter)
Router.use('/orders', OrderRouter)

module.exports = Router
