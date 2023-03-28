const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const ProductRouter = require('./ProductRouter')

Router.use('/users', UserRouter)
Router.use('/products', ProductRouter)

module.exports = Router
