import { useState } from "react";
import { LoginUser } from "../services/Auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  let navigate = useNavigate()

  const initialState = { email: '', password: '' }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    e.preventDefault()
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await LoginUser(formValues)
    setFormValues(initialState)
    setUser(payload)
    navigate('/')
  }

  return (
    <div className="login">
      <div className="login-card">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input
              className="email"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
            <label className="label" htmlFor="password">
              Password:
            </label>
            <input
              className="password"
              onChange={handleChange}
              name="password"
              type="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="login">
            <button
              className="loginbtn"
              disabled={!formValues.email || !formValues.password}
            >
              Sign In
            </button>
            <p className="account">
              Don't have an account? Click{' '}
              <button className="switchbtn" onClick={() => setShowing(true)}>
                here
              </button>
              to make one!
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login