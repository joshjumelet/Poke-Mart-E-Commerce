import CartCard from '../components/CartCard'
import { useNavigate } from 'react-router-dom'

const Order = ({ bag, setBag }) => {
  let navigate = useNavigate()

  const totalPrice = bag.reduce((acc, id) => acc + id.price, 0)

  const removeFromBag = (e) => {
    const newBag = bag.splice((id) => id !== e.target.id)
    setBag(newBag)
  }

  return (
    <div>
      <div className="bag-card">
        <h1>Your Bag</h1>
        <section className="order-total">
          <div>
            <h2>Order Total:</h2>
            <h2>${totalPrice}</h2>
          </div>
        </section>
        <form>
          <section>
            <h2>Items in your bag:</h2>
            <ul>
              <li>
                <div className="cart-grid">
                  {bag.map((id) => (
                    <div>
                      <CartCard
                        key={id}
                        id={id.id}
                        name={id.name}
                        image={id.image}
                        price={id.price}
                        removeFromBag={removeFromBag}
                      />
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </section>
        </form>
        <div className="complete-order">
          <button className="button" onClick={() => navigate('/complete')}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Order
