import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav-container'>
      <div className='nav-header'>
        <h3 className='nav-title'>Poké Mart</h3>
      </div>
      <div className='nav-right'>
        <Link to='/' className='nav-link'>Home</Link>
        <Link to='/about' className='nav-link'>About</Link>
        <Link to='/profile' className='nav-link'>Sign In</Link>
      </div>
    </div>
  )
}

export default Nav