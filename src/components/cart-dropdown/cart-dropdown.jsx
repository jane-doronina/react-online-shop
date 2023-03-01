import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles";

import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../store/cart/cart-selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout")
  }

  return (
    <CartDropdownContainer>
      <CartItems>
       {cartItems.length ? (
        cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>

    </CartDropdownContainer>
  )
}

export default CartDropdown;
