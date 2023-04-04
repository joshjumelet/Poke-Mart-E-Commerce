import { Link } from 'react-router-dom'

const Nav = ({ user, handleLogout }) => {
  return user ? (
    <div className='nav-container'>
      <div className='nav-header'>
        <h3>Poké Mart</h3>
      </div>
      <div className='nav-right'>
        <div>
          <Link to='/' className='nav-link'>Home</Link>
        </div>
        <div>
          <Link to='/' className='nav-link' onClick={handleLogout}>Logout</Link>
        </div>
        <div>
          <Link to='/about' className='nav-link'>About</Link>
        </div>
        <div>
          <Link to='/profile' className='nav-link'>Profile</Link>
        </div>
        <div>
          <Link to='/order' className='nav-link'>Bag</Link>
        </div>
        <div>
          {user.id === 1 && (
          <Link to='/create' className='nav-link'>Add Product</Link>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className='nav-container'>
      <div className='nav-header'>
        <h3>Poké Mart</h3>
      </div>
      <div className='nav-right'>
        <div>
          <Link to='/' className='nav-link'>Home</Link>
        </div>
        <div>
          <Link to='/welcome' className='nav-link'>Login</Link>
        </div>
        <div>
          <Link to='/about' className='nav-link'>About</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav