import './App.css'
import axios from 'axios'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'
import Nav from './components/Nav'
import Register from './components/Register'
import Login from './components/Login'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  let navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [showing, setShowing] = useState(false)

  const checkToken = async () => {
    const user = await CheckSession()
    setuser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <main>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={<Login setUser={setUser} setShowing={setShowing} />}
        />
        <Route
          path="/register"
          element={<Register setShowing={setShowing} />}
        />
      </main>
    </div>
  )
}

export default App
