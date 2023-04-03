import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../services/api'
import UserCard from '../components/UserCard'

const UserProfile = ({ user, handleLogout }) => {
  let navigate = useNavigate()

  const [thisUser, setThisUser] = useState({})
  const [userDetails, setUserDetails] = useState({})
  const [updated, setUpdated] = useState(false)

  const GetUserDetails = async () => {
    const response = await Client.get(`/api/users/details/${user.id}`)
    setThisUser(response.data)
  }

  useEffect(() => {
    if (user) {
      GetUserDetails()
    }
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.put(`/api/users/update_profile/${user.id}`, userDetails)
    setUserDetails({ ...userDetails })
    alert('The info on this user has been updated!')
    window.location.reload(false)
  }

  const update = () => {
    setUpdated(true)
  }

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value })
  }

  const deleted = async () => {
    let text = 'Are you sure to delete this user?'
    if (window.confirm(text) === true) {
      await Client.delete(`/api/users/delete/${user.id}`, userDetails)
      setUserDetails({ ...userDetails })
      navigate('/')
    }
  }

  return (
    <div className="user-profile">
      <div className="welcome">
        <h2>Welcome {thisUser?.name} to your Poké Mart Profile!</h2>
        <UserCard thisUser={thisUser} />
        <h4>
          Update User Info: Please fill in the updated info in the corresponding
          field
        </h4>
        <div>
          <button onClick={update}>Update Info</button>
          {updated && (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                onChange={handleChange}
                value={userDetails.name}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                onChange={handleChange}
                value={userDetails.description}
              />
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                onChange={handleChange}
                value={userDetails.price}
              />
              <button type="submit" className="button">
                Update User
              </button>
            </form>
          )}
        </div>
        <div className="delete">
          <h4>Delete User:</h4>
          <button onClick={deleted} className="button">
            Delete
          </button>
        </div>
        <button className="logoutbtn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default UserProfile
