const CartCard = (props) => {

  return (
    <div className="cart-card">
      <div className="cart-img">
        <img src={props.image} />
      </div>
      <div className="cart-info">
        <h3>{props.name} ${props.price}</h3>
      </div>
    </div>
  )
}

export default CartCard