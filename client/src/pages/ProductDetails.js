import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ProductDetails = ({ products, bag, setBag }) => {
  let navigate = useNavigate()
  let { id } = useParams()
  console.log(id)
  const [details, setDetails] = useState({})

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
    </div>
  )
}

export default ProductDetails
