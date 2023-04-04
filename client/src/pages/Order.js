import CartCard from '../components/CartCard'

const Order = ({ bag, setBag }) => {
  console.log(bag)
  // let navigate = useNavigate()

  const totalPrice = bag.reduce((acc, id) => acc + id.price, 0)

  return (
    <div>
      <div className="bag-card">
        <h1>Your Bag</h1>
        <form>
          <section>
            <h2>Items in your bag:</h2>
            <ul>
              <li>
                <div>
                  {bag.map((id) => (
                    <div>
                      <CartCard
                        key={id}
                        name={id.name}
                        image={id.image}
                        price={id.price}
                      />
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
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </section>
          <section className="order-total">
            <div>
              <h2>Order Total:</h2>
              <h2>${totalPrice}</h2>
            </div>
          </section>
        </form>
      </div>
    </div>
  )
}

export default Order
