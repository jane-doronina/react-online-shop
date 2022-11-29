import CheckoutItem from "../../components/checkout-item/checkout-item";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.scss";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
  }
  return (
    <div className="checkout-container">
      <div className="checkout-headings">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </div>
      {cartItems.map((item) => <CheckoutItem key={item.id} checkoutItem={item}/>)}
      <div className="total-price">
        <span>TOTAL: ${calculateTotal(cartItems)}</span>
      </div>
    </div>
  )
}

export default Checkout;
