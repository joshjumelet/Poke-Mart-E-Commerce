import Client from "../services/api"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const UpdatePassword = ({ thisUser }) => {
  let navigate = useNavigate()

  const [newPassword, setNewPassword] = useState({})
  const [updated, setUpdated] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.put(`/api/users/update_password/${thisUser.id}`, newPassword)
    setNewPassword({ ...newPassword })
    alert('The password on this user has been updated!')
    window.location.reload(false)
  }

  const update = () => {
    setUpdated(true)
  }

  const handleChange = (e) => {
    setNewPassword({ ...newPassword, [e.target.id]: e.target.value })
  }

  return (
    <div>
      <h4>
        Update Password: Please fill in the updated info in the corresponding
        field
      </h4>
      <div>
        <button onClick={update}>Update Password</button>
        {updated && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="oldPassword">Old Password:</label>
            <input
              type="text"
              id="oldPassword"
              onChange={handleChange}
              value={newPassword.oldPassword}
            />
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="text"
              id="newPassword"
              onChange={handleChange}
              value={newPassword.newPassword}
            />
            <button type="submit" className="button">
              Update Password
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default UpdatePassword