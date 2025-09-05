import { useState } from "react"

function ShoppingCart() {
  const [quantity, setQuantity] = useState(0)
  const price= 100
  const increment= ()=>{setQuantity(quantity<10? quantity+1:quantity)}
  const decrement= ()=>{setQuantity(quantity>0? quantity-1:0)}


return(
  <div>
    <h2>Shopping Cart</h2>
    <h3>10 limited Edition T-shirt 100 only</h3>
    <p>Quanity: {quantity}</p>
    <p>Price: {price*quantity}</p>
    <button onClick={increment}>+</button>
     <button onC1ick={decrement}>-</button>

      <button onClick={()=>{if(quantity > 0){alert("check out successfully")}else{
        alert("You dont have any item to checkout")}
      }}>Checkout</button>
  </div>
)
}
export default ShoppingCart
