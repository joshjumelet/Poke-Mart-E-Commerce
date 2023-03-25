const { Product } = require('../models')

const GetProducts = async (req, res) => {
  try {
    const products = await Product.findAll()
    res.send(products)
  } catch (error) {
    throw error
  }
}

const GetProductDetails = async (req, res) => {
  try {
    const productDetail = await Product.findByPk(req.params.product_id)
    res.send(productDetail)
  } catch (error) {
    throw error
  }
}

const CreateProduct = async (req, res) => {
  try {
    const product = {
      ...req.body
    }
    const newProduct = await Product.create(product)
    res.send(newProduct)
  } catch (error) {
    throw error
  }
}

const UpdateProduct = async (req, res) => {
  try {
    let productId = parseInt(req.params.product_id)
    let updatedProduct = await Product.update(req.body, {
      where: { id: productId },
      returning: true
    })
    res.send(updatedProduct)
  } catch (error) {
    throw error
  }
}

const DeleteProduct = async (req, res) => {
  try {
    let productId = parseInt(req.params.product_id)
    await Product.destroy({ where: { id: productId } })
    res.send({ message: `Delete Product with ID numer ${productId}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProducts,
  GetProductDetails,
  CreateProduct,
  UpdateProduct,
  DeleteProduct
}
