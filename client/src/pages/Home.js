import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Client from '../services/api'
import Search from '../components/Search'
import ProductCard from '../components/ProductCard'

const Home = ({ products, user, addToBag, handleLogout }) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const [searchResults, setSearchResults] = useState([])
  const [searched, setSearched] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const getSearchResults = async (e) => {
    e.preventDefault()
    const response = await Client.get(
      `/api/products/find-product?search=${searchQuery}`
    )
    console.log(response)
    const results = response.data.products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setSearchResults(results)
    console.log(results)
    setSearchQuery('')
    setSearched(true)
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const clearSearch = () => {
    setSearchResults([])
    setSearched(false)
  }

  return (
    <div>
      <h1 className="title">Hi! Welcome to the Poké Mart</h1>
      <div>
        <Search
          onSubmit={getSearchResults}
          value={searchQuery}
          onChange={handleChange}
          clearSearch={clearSearch}
        />
      </div>
      {searched && searchResults.length === 0 && (
        <div>
          <p className="noResult">There are no matching search results</p>
        </div>
      )}
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <section className="container-grid">
            {searchResults.map((result) => (
              <Link to={`/products/${result.id}`} key={result.id}>
                <ProductCard
                  name={result.name}
                  image={result.image}
                  price={result.price}
                  addToBag={addToBag}
                />
              </Link>
            ))}
          </section>
        </div>
      )}
      <div>
        <h2 className="products-title">View Our Inventory</h2>
        <section className="container-grid">
          {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <ProductCard
                name={product.name}
                image={product.image}
                price={product.price}
                addToBag={addToBag}
              />
            </Link>
          ))}
        </section>
      </div>
      <button className="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Home
