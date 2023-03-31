import './App.css'
import axios from 'axios'
import Client from './services/api'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Register from './components/Register'
import Login from './components/Login'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'

function App() {
  let navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [showing, setShowing] = useState(false)
  const [products, setProducts] = useState([])
  const [bag, setBag] = useState([])

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const allProducts = async () => {
    const response = await Client.get('/api/products')
    console.log(response.data)
    setProducts(response.data)
  }

  const addToBag = (product) => {
    let newBag = bag
    newBag.push(product)
    setBag(newBag)
    let productArray = newOrder.products
    productArray.push(product._id)
    setNewOrder({ ...newOrder, products: productArray })
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
    navigate('/')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
    allProducts()
  }, [])

  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile"
            element={<Profile handleLogout={handleLogout} user={user} />}
          />
          <Route
            path="/login"
            element={<Login setUser={setUser} setShowing={setShowing} />}
          />
          <Route
            path="/register"
            element={<Register setShowing={setShowing} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
