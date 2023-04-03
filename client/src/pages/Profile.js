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
        <button className="logoutbtn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default UserProfile
