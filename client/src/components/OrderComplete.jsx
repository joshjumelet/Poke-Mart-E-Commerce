import { useNavigate } from "react-router-dom"

const OrderComplete = ({ bag, setBag, user }) => {
  let navigate = useNavigate()

  const totalPrice = bag.reduce((acc, id) => acc + id.price, 0)

  const handleClick = () => {
    navigate('/')
    window.location.reload()
  }

  return (
    <div>
      <div>
        <h1>Order successfully placed. Thank you!</h1>
        <h3>A confirmation email has been sent to {user.email}</h3>
      </div>
      <div className="details-container">
        <h3>Order Details:</h3>
        <ul>
          <li className="list">
            <div className="order-details">
              {bag.map((id) => (
              <h4>{id.name} ${id.price}</h4>
              ))}
            </div>
          </li>
        </ul>
        <h3>Total: ${totalPrice}</h3>
      </div>
      <div>
        <h3>Please come again!</h3>
      </div>
      <button onClick={() => handleClick()} className="button">
        Press to Complete
      </button>
    </div>
  )
}

export default OrderComplete