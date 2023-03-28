import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CartDropdownContainer, CartItems, EmptyMessage, Subheading } from "./cart-dropdown.styles";

import CartItem from "../cart-item/cart-item";
import { selectCartItems, selectCartCount, selectIsCartOpen } from "../../store/cart/cart-selector";
import { setIsCartOpen } from "../../store/cart/cart-reducer";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const quantity = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  }

  return (
    <CartDropdownContainer>
      <h4>YOUR SHOPPING BAG ({quantity} items)</h4>
      <Subheading><strong>Free returns + free shipping</strong> over £50 </Subheading>
      <CartItems>
       {cartItems.length ? (
        cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>

    </CartDropdownContainer>
  )
}

export default CartDropdown;
