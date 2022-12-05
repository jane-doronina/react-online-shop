import CheckoutItem from "../../components/checkout-item/checkout-item";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CheckoutContainer, CheckoutHeadings, TotalPrice } from "./checkout.styles";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const calculateTotal = (cartItems) => {
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
  }
  return (
    <CheckoutContainer>
      <CheckoutHeadings>
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </CheckoutHeadings>
      {cartItems.map((item) => <CheckoutItem key={item.id} checkoutItem={item}/>)}
      <TotalPrice>
        <span>TOTAL: ${calculateTotal(cartItems)}</span>
      </TotalPrice>
    </CheckoutContainer>
  )
}

export default Checkout;
