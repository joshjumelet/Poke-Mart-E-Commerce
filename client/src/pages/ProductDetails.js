import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const ProductDetails = ({ products }) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const product = products.find((products) => products.id === id)

  useEffect(() => {}, [products])

  return (
    <div>
      <ProductCard product={product} />
    </div>
  )
}

export default ProductDetails
