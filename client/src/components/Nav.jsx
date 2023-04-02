import { Link } from 'react-router-dom'
import { useState } from 'react'

const Nav = ({ user, handleLogout }) => {
  return (
    <div className='nav-container'>
      <div className='nav-header'>
        <h3 className='nav-title'>Poké Mart</h3>
      </div>
      <div className='nav-right'>
        <div>
          <Link to='/' className='nav-link'>Home</Link>
        </div>
        <div>
          <Link to='/about' className='nav-link'>About</Link>
        </div>
        <div>
          <Link to='/welcome' className='nav-link'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav