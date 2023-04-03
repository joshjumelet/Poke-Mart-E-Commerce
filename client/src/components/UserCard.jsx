const UserCard = ({ thisUser }) => {
  return (
    <div className="user-container">
      <div className="user">
        <div className="info">
          <span>Name:</span> {thisUser?.name}
        </div>
        <div className="info">
          <span>Email:</span> {thisUser?.email}
        </div>
        <div className="info">
          <span>Address:</span> {thisUser?.address}
        </div>
        {/* <div className="info">
          <span>Password:</span> {thisUser?.passwordDigest}
        </div> */}
      </div>
    </div>
  )
}

export default UserCard