const CartCard = (props) => {

  const handleRemoveFromBag = () => {
    props.removeFromBag(props.id)
  }

  return (
    <div className="cart-card">
      <div className="cart-img">
        <img src={props.image} />
      </div>
      <div className="cart-info">
        <h3>{props.name} ${props.price}</h3>
      </div>
      <label className="quantity">
        <h3>Quantity:</h3>
      </label>
      <select className="quantity-select">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
      </select>
      <div className="delete">
        <button id={props.id} onClick={handleRemoveFromBag} className="button">
          Remove
        </button>
      </div>
    </div>
  )
}

export default CartCard