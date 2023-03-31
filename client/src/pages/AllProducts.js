import ProductCard from '../components/ProductCard'

const AllProducts = ({ products }) => {
  return (
    <div className="product-container">
      <div className="products">
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default AllProducts
