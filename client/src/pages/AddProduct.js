import Client from '../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = ({ allProducts }) => {
  const initProduct = {
    name: '',
    description: '',
    image: '',
    price: ''
  }

  const [newProduct, setNewProduct] = useState(initProduct)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await Client.post('/api/products/create', newProduct)
      setNewProduct(initProduct)
      allProducts()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.id]: e.target.value })
  }

  return (
    <div>
      <h1>Add A New Product</h1>
      <h3>Please fill in the product info</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={newProduct.name}
        />
        <label htmlFor="image">Image Url:</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={newProduct.image}
        />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          onChange={handleChange}
          value={newProduct.description}
        />
        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          onChange={handleChange}
          value={newProduct.price}
        />
        <button type="submit" className="button">
          Add Product
        </button>
      </form>
    </div>
  )
}

export default AddProduct
