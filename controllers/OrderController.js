const { Order, Product, User } = require('../models')

const CreateOrder = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let productId = parseInt(req.params.product_id)
    let orderBody = {
      user_id: userId,
      product_id: productId,
      ...req.body
    }
    let order = await Order.create(orderBody)
    res.send(order)
  } catch (error) {
    throw error
  }
}

const GetOrders = async (req, res) => {
  try {
    const order = await Order.findAll()
    res.send(order)
  } catch (error) {
    throw error
  }
}

const GetOrderDetails = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.order_id)
    res.send(order)
  } catch (error) {
    throw error
  }
}

const GetUserOrders = async (req, res) => {
  try {
    const userOrders = await Order.findAll({
      where: { user_id: req.params.user_id },
      include: {
        model: Product,
        as: 'products',
        attributes: ['name', 'description', 'image', 'price']
      }
    })
    res.send(userOrders)
  } catch (error) {
    throw error
  }
}

const UpdateOrder = async (req, res) => {
  try {
    let orderId = parseInt(req.params.order_id)
    let updatedOrder = await Order.update(req.body, {
      where: { id: orderId },
      returning: true
    })
    res.send(updatedOrder)
  } catch (error) {
    throw error
  }
}

const DeleteOrder = async (req, res) => {
  try {
    let orderId = parseInt(req.params.order_id)
    await Order.destroy({ where: { id: orderId } })
    res.send({ message: `Deleted Order with ID number ${orderId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateOrder,
  GetOrders,
  GetOrderDetails,
  GetUserOrders,
  UpdateOrder,
  DeleteOrder
}
