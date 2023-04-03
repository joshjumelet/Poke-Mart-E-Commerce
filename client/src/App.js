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
import ProductDetails from './pages/ProductDetails'
import Welcome from './pages/Welcome'
import Order from './pages/Order'
import AddProduct from './pages/AddProduct'

function App() {
  let navigate = useNavigate()
  let { id } = useParams()

  const [user, setUser] = useState(null)
  const [showing, setShowing] = useState(false)
  const [products, setProducts] = useState([])
  const [bag, setBag] = useState([])
  const [orders, setOrders] = useState([])
  const [newOrder, setNewOrder] = useState({
    product_id: {},
    quantity: 1
  })

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  const allProducts = async () => {
    const response = await Client.get('/api/products')
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

  // const addOrder = async (e) => {
  //   e.preventDefault()
  //   let response = await Client.post(`api/orders/${products.id}`, newOrder)
  //   let currentOrders = orders
  //   currentOrders.push(response.data.order)
  //   setOrders(currentOrders)
  //   setNewOrder({
  //     product_id: {},
  //     quantity: 1
  //   })
  //   setBag([])
  //   navigate('/')
  // }

  // const handleOrder = (e) => {
  //   setNewOrder({ ...newOrder, [e.target.id]: e.target.value })
  // }

  const addToBag = (product) => {
    let newBag = bag
    newBag.push(product)
    setBag(newBag)
    let productArr = newOrder.products
    productArr.push(id)
    setNewOrder({ ...newOrder, products: productArr })
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
            element={
              <Home
                products={products}
                addToBag={addToBag}
                handleLogout={handleLogout}
              />
            }
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
              <AllProducts
                products={products}
                setProducts={setProducts}
                allProducts={allProducts}
              />
            }
          />
          <Route
            path="/products/:id"
            element={
              <ProductDetails
                products={products}
                bag={bag}
                setBag={setBag}
                addToBag={addToBag}
              />
            }
          />
          <Route
            path="/order"
            element={
              <Order
                bag={bag}
                setBag={setBag}
                // handleOrder={handleOrder}
                // addOrder={addOrder}
                // newOrder={newOrder}
                // setNewOrder={setNewOrder}
                // orders={orders}
                // setOrders={setOrders}
              />
            }
          />
          <Route
            path="/create"
            element={<AddProduct allProducts={allProducts} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
