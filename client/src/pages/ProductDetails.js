import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Client from '../services/api'
import ProductCard from '../components/ProductCard'

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
      <div>
        <h1></h1>
      </div>
    </div>
  )
}

export default ProductDetails
