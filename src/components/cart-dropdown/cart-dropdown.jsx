import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartDropdownContainer, CartItems, EmptyMessage, Subheading, ShevronDown } from "./cart-dropdown.styles";

import CartItem from "../cart-item/cart-item";
import { selectCartItems, selectCartCount } from "../../store/cart/cart-selector";
import { setIsCartOpen } from "../../store/cart/cart-reducer";

const CartDropdown = () => {
  const [isVisible, setIsVisible] = useState(true);
  const cartItems = useSelector(selectCartItems);
  const quantity = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false));
  }

  const handleScroll = (event) => {
    if (event.target.scrollTop > 0)
      setIsVisible(false);
    else
      setIsVisible(true);
  }

  return (
    <CartDropdownContainer>
      <h4>YOUR SHOPPING BAG ({quantity} items)</h4>
      <Subheading><strong>Free returns + free shipping</strong> over £50 </Subheading>
      <CartItems onScroll={handleScroll}>
       {cartItems.length ? (
        cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
        {cartItems.length >= 2 && isVisible ? <ShevronDown><i class="fa-solid fa-chevron-down"></i></ShevronDown> : "" }
      </CartItems>
      <Button buttonType={BUTTON_TYPE_CLASSES.base} onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>

    </CartDropdownContainer>
  )
}

export default CartDropdown;
