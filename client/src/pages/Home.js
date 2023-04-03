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
    const response = await Client.get(`/api/products/${searchQuery}`)
    setSearchResults(response.data.results)
    setSearched(true)
    setSearchQuery('')
  }

  const handleChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div>
      <h1 className="title">Hi {user?.name}! Welcome to the Poké Mart</h1>
      <div>
        <Search
          onSubmit={getSearchResults}
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
      {searched && (
        <div>
          <h2>Search Results</h2>
          <section className="container-grid">
            {searchResults.map((result) => (
              <Link to={`/products/${result._id}`} key={result._id}>
                <ProductCard
                  name={result.name}
                  image={result.image}
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
      <button className="logoutbtn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Home
