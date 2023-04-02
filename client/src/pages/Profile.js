import { useState, useEffect } from 'react'
import Client from '../services/api'
import UserCard from '../components/UserCard'

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
        <h2>Welcome {thisUser?.name} to your Poké Mart Profile!</h2>
        <UserCard thisUser={thisUser} />
        <button className="logoutbtn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default UserProfile
