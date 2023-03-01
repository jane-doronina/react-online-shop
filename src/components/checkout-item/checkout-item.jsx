import { useDispatch, useSelector } from "react-redux";

import { CheckoutItemContainer, CheckoutQuantity } from "./checkout-item.styles";
import { addItemToCart, deleteItem, decreaseQuantity } from "../../store/cart/cart-action";
import { selectCartItems } from "../../store/cart/cart-selector";

const CheckoutItem = ({checkoutItem}) => {
  const {imageUrl, name, price, quantity} = checkoutItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addQuantity = () => dispatch(addItemToCart(cartItems, checkoutItem));
  const removeItem = () => dispatch(deleteItem(cartItems, checkoutItem));
  const decreaseItemQuantity = () => dispatch(decreaseQuantity(cartItems, checkoutItem));

  return (
    <CheckoutItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <span>{name}</span>
      <div><i className="fa-solid fa-circle-chevron-left" onClick={decreaseItemQuantity} ></i><CheckoutQuantity>{quantity}</CheckoutQuantity><i className="fa-solid fa-circle-chevron-right" onClick={addQuantity}></i></div>
      <span>£{price}</span>
      <i className="fa-solid fa-x" onClick={removeItem}></i>
    </CheckoutItemContainer>
  )

}

export default CheckoutItem;
