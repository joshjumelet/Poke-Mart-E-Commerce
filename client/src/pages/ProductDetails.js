import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'

const ProductDetails = ({ products, allProducts, bag, setBag }) => {
  let navigate = useNavigate()
  let { id } = useParams()
  console.log(id)
  const [details, setDetails] = useState({})
  const [updated, setUpdated] = useState(false)

  const productDetails = products.find((product) => {
    return product.id === parseInt(id)
  })
  console.log(productDetails)

  useEffect(() => {
    setDetails(productDetails)
  }, [products])

  const addToBag = (item) => {
    let newBag = [...bag]
    newBag.push(item)
    setBag(newBag)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.put(`/api/products/update/${id}`, productDetails)
    setDetails({ ...productDetails })
    alert('The info on this ride has been updated!')
    window.location.reload(false)
  }

  const update = () => {
    setUpdated(true)
  }

  const handleChange = (e) => {
    setDetails({ ...productDetails, [e.target.id]: e.target.value })
  }

  const deleted = async () => {
    let text = 'Are you sure to delete this product?'
    if (window.confirm(text) === true) {
      await Client.delete(`/api/products/delete/${id}`, productDetails)
      setDetails({ ...productDetails })
      navigate('/')
      allProducts()
    }
  }

  return (
    <div>
      <div className="product-info">
        <h1>
          {productDetails.name} ${productDetails.price}
        </h1>
      </div>
      <div className="product-img">
        <img src={productDetails.image} alt="product-card" />
      </div>
      <div>{productDetails.description}</div>
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
              value={productDetails.name}
            />
            <label htmlFor="image">Image Url:</label>
            <input
              type="text"
              id="image"
              onChange={handleChange}
              value={productDetails.image}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              cols="40"
              rows="5"
              id="description"
              onChange={handleChange}
              value={productDetails.description}
            ></textarea>
            <label htmlFor="price">Price:</label>
            <input
              type="text"
              id="price"
              onChange={handleChange}
              value={productDetails.price}
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
