import Login from '../components/Login'
import Register from '../components/Register'

const Welcome = ({ showing, setShowing, setUser }) => {
  return (
    <div>
      <div className="welcomeroot">
        <h1 className="welcome">Welcome!</h1>
        <h3 className="description">
          <i>Welcome to the Poké Mart</i>
        </h3>
      </div>
      <div className="signingform">
        {showing ? (
          <Register showing={showing} setShowing={setShowing} />
        ) : (
          <Login showing={showing} setShowing={setShowing} setUser={setUser} />
        )}
      </div>
    </div>
  )
}
export default Welcome
