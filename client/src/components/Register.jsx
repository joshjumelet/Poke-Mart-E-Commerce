import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = ({}) => {
  let navigate = useNavigate()

  let initialState = {
    name: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: ''
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      address: formValues.address,
      password: formValues.password
    })
    setFormValues(initialState)
    navigate('/login')
  }

  return (
    <div className='register'>
      <div className='register-card'>
        <form className='register-form' onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label className='label' htmlFor='name'>
              Name:
            </label>
            <input
              className='reg'
              onChange={handleChange}
              name='name'
              type='text'
              placeholder='John Smith'
              value={formValues.name}
              required
            />
            <label className='label' htmlFor='email'>
              Email:
            </label>
            <input
              className='reg'
              onChange={handleChange}
              name='email'
              type='email'
              placeholder='example@example.coom'
              value={formValues.email}
              required
            />
            <label className='label' htmlFor='address'>
              Address:
            </label>
            <input
              className='reg'
              onChange={handleChange}
              name='address'
              type='text'
              placeholder='Enter address here'
              value={formValues.address}
              required
            />
            <label className='label' htmlFor='password'>
              Password:
            </label>
            <input
              className='reg'
              onChange={handleChange}
              name='password'
              type='password'
              value={formValues.password}
              required
            />
            <label className='label' htmlFor='password'>
              Confirm Password:
            </label>
            <input
              className='reg'
              onChange={handleChange}
              name='confirmPassword'
              type='password'
              value={formValues.confirmPassword}
              required
            />
          </div>
          <div className="loginbutton">
            <button
              className="loginbtn"
              disabled={
                !formValues.email ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
              }
            >
              Login
            </button>
            <p className="account">
              Already have an account? Click{' '}
              <button className="switchbtn" onClick={() => setShowing(false)}>
                here
              </button>{' '}
              to Login!
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register