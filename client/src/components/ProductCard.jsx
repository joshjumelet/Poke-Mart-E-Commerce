const ProductCard = (props) => {
  
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={props.image} />
      </div>
      <div className="product-info">
        <h3 className="inactive" activeclassname="active">{props.name} ${props.price}</h3>
      <button className="cartbtn" onClick={() => props.addToBag(props.product)}>Add to Bag</button>
      </div>
    </div>
  )
}

export default ProductCard