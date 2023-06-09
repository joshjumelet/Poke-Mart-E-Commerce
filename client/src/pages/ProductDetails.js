import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'

const ProductDetails = ({ products, allProducts, bag, setBag, user }) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const [details, setDetails] = useState({})
  const [updated, setUpdated] = useState(false)

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
    alert('The info on this product has been updated!')
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

  const addToBag = (id) => {
    let newBag = [...bag]
    newBag.push(id)
    setBag(newBag)
    alert('Item was added to your bag!')
  }

  return user ? (
    <div>
      <div className="product-info">
        <h1>
          {productDetails?.name} ${productDetails?.price}
        </h1>
      </div>
      <div className="details-row">
        <div className="details-column">
          <div className="img-column">
            <img
              src={productDetails?.image}
              alt="product-card"
              className="details-img"
            />
          </div>
        </div>
        <div className="details-column">
          <div className="description-column">
            <div className="details-description">
              <h3>Description: {productDetails?.description}</h3>
            </div>
            <button className="button" onClick={() => addToBag(productDetails)}>
              Add to Bag
            </button>
            <div>
              <span>
                {bag.length ? (
                  <button
                    onClick={() => navigate('/order')}
                    type="button"
                    className="button"
                  >
                    View Bag
                  </button>
                ) : (
                  <h4> </h4>
                )}
              </span>
            </div>
          </div>
          <div>
            {user.id === 1 && (
              <div>
                <h4>
                  Update Product Info: Please fill in the updated info in the
                  corresponding field
                </h4>
                <button onClick={update} className="button">
                  Update Info
                </button>
                {updated && (
                  <form onSubmit={handleSubmit} className="update-form">
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
                <div className="delete">
                  <h4>Delete Product:</h4>
                  <button onClick={deleted} className="button">
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="product-info">
        <h1>
          {productDetails?.name} ${productDetails?.price}
        </h1>
      </div>
      <div className="details-row">
        <div className="details-column">
          <div className="img-column">
            <img
              src={productDetails?.image}
              alt="product-card"
              className="details-img"
            />
          </div>
        </div>
        <div className="details-column">
          <div className="description-column">
            <div className="details-description">
              <h3>Description: {productDetails?.description}</h3>
              <span></span>
              <h3 className="please-login">
                ** Please login to add items to your bag! **
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
