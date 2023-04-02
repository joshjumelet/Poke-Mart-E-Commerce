const Order = ({ bag, setBag }) => {
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
                  {bag.map((products) =>
                    products.map((product) => (
                      <div>
                        <h3>{product.name}</h3>
                      </div>
                    ))
                  )}
                </div>
              </li>
            </ul>
          </section>
        </form>
      </div>
    </div>
  )
}

export default Order
