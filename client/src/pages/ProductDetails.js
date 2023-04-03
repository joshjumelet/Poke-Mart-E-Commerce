import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'

const ProductDetails = ({ products, allProducts, bag, setBag }) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const [details, setDetails] = useState({})
  const [updated, setUpdated] = useState(false)
  const [orders, setOrders] = useState([])
  const [newOrder, setNewOrder] = useState({
    product_id: {},
    quantity: 1
  })

  const productDetails = products.find((product) => {
    return product.id === parseInt(id)
  })

  useEffect(() => {
    setDetails(productDetails)
  }, [products])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.put(`/api/products/update/${id}`, details)
    setDetails({ ...details })
    alert('The info on this ride has been updated!')
    window.location.reload(false)
  }

  const update = () => {
    setUpdated(true)
  }

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.id]: e.target.value })
  }

  const deleted = async () => {
    let text = 'Are you sure to delete this product?'
    if (window.confirm(text) === true) {
      await Client.delete(`/api/products/delete/${id}`, details)
      setDetails({ ...details })
      navigate('/')
      allProducts()
    }
  }

  const addOrder = async (e) => {
    e.preventDefault()
    let response = await Client.post(`api/orders/${id}`, newOrder)
    let currentOrders = orders
    currentOrders.push(response.data.order)
    setOrders(currentOrders)
    setNewOrder({
      product_id: {},
      quantity: 1
    })
    setBag([])
    navigate('/')
  }

  const handleOrder = (e) => {
    setNewOrder({ ...newOrder, [e.target.id]: e.target.value })
  }

  const addToBag = (product) => {
    let newBag = bag
    newBag.push(productDetails)
    setBag(newBag)
    let productArr = newOrder.product_id
    productArr.push(id)
    setNewOrder({ ...newOrder, product_id: productArr })
  }

  return (
    <div>
      <div className="product-info">
        <h1>
          {productDetails?.name} ${productDetails?.price}
        </h1>
      </div>
      <div className="product-img">
        <img src={productDetails?.image} alt="product-card" />
      </div>
      <div>{productDetails?.description}</div>
      <button className="bagbtn" onClick={() => addToBag(productDetails)}>
        Add to Bag
      </button>
      <h4>
        Update Product Info: Please fill in the updated info in the
        corresponding field
      </h4>
      <div>
        <button onClick={update}>Update Info</button>
        {updated && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              onChange={handleChange}
              value={details.name}
            />
            <label htmlFor="image">Image Url:</label>
            <input
              type="text"
              id="image"
              onChange={handleChange}
              value={details.image}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              cols="40"
              rows="5"
              id="description"
              onChange={handleChange}
              value={details.description}
            ></textarea>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              onChange={handleChange}
              value={details.price}
            />
            <button type="submit" className="button">
              Update Product
            </button>
          </form>
        )}
      </div>
      <div className="delete">
        <h4>Delete Product:</h4>
        <button onClick={deleted} className="button">
          Delete
        </button>
      </div>
      <div>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  )
}

export default ProductDetails
