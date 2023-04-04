const OrderComplete = ({ bag, user }) => {
  console.log(user)
  console.log(bag)

  const totalPrice = bag.reduce((acc, id) => acc + id.price, 0)

  return (
    <div>
      <div>
        <h1>Order successfully placed. Thank you!</h1>
        <h3>A confirmation email has been sent to {user.email}</h3>
      </div>
      <div>
        <h3>Order Details:</h3>
        <ul>
          <li>
            <div className="order-details">
              {bag.map((id) => (
              <h4>{id.name} ${id.price}</h4>
              ))}
            </div>
          </li>
        </ul>
        <h3>Total: ${totalPrice}</h3>
      </div>
    </div>
  )
}

export default OrderComplete