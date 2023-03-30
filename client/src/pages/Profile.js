import { useState, useEffect } from 'react'
import Client from '../services/api'

const UserProfile = ({ user, handleLogout }) => {
  const [thisUser, setThisUser] = useState({})

  const GetUserDetails = async () => {
    const response = await Client.get(`/api/users/details/${user.id}`)
    setThisUser(response.data)
  }

  useEffect(() => {
    if (user) {
      GetUserDetails()
    }
  }, [user])

  return (
    <div className="user-profile">
      <div className="welcome">
        <h2>Welcome to the Poké Mart {thisUser?.name}!</h2>
        <UserInfo thisUser={thisUser} />
        <button className="logoutbtn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default UserProfile
