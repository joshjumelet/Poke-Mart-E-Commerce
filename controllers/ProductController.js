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

const FindProduct = async (req, res) => {
  try {
    const { search } = req.query
    console.log(search)
    const products = await Product.findAll({
      where: {
        [Op.or]: [{ name: search }]
      }
    })

    if (products) {
      return res.status(200).json({ products })
    }
    return res.status(401).send('No matching products found')
  } catch (error) {
    return res.status(500).send(error.message)
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
  FindProduct,
  CreateProduct,
  UpdateProduct,
  DeleteProduct
}
