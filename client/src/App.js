import './App.css'
import Client from './services/api'
import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Register from './components/Register'
import Login from './components/Login'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import AllProducts from './pages/AllProducts'
import Welcome from './pages/Welcome'
import Order from './pages/Order'

function App() {
  let navigate = useNavigate()
  let { id } = useParams()

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

  const item = products.filter((product) => product.id === parseInt(id))

  const addToBag = (item) => {
    let newBag = [...bag]
    newBag.push(item)
    setBag(newBag)
  }

  return (
    <div className="App">
      <div>
        <Nav user={user} handleLogout={handleLogout} />
      </div>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Home products={products} addToBag={addToBag} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile"
            element={<Profile handleLogout={handleLogout} user={user} />}
          />
          <Route
            path="/welcome"
            element={
              <Welcome
                showing={showing}
                setShowing={setShowing}
                setUser={setUser}
              />
            }
          />
          <Route
            path="/login"
            element={<Login setUser={setUser} setShowing={setShowing} />}
          />
          <Route
            path="/register"
            element={<Register setShowing={setShowing} />}
          />
          <Route
            path="/products"
            element={
              <AllProducts products={products} setProducts={setProducts} />
            }
          />
          <Route path="/order" element={<Order bag={bag} setBag={setBag} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
