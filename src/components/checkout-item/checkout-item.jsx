import { useDispatch } from "react-redux";

import { CheckoutItemContainer, CheckoutQuantity } from "./checkout-item.styles";
import { addItemToCart, deleteItem, decreaseQuantity } from "../../store/cart/cart-reducer";

const CheckoutItem = ({checkoutItem}) => {
  const {imageUrl, name, price, quantity} = checkoutItem;
  const dispatch = useDispatch();

  const addQuantity = () => dispatch(addItemToCart(checkoutItem));
  const removeItem = () => dispatch(deleteItem(checkoutItem));
  const decreaseItemQuantity = () => dispatch(decreaseQuantity(checkoutItem));

  return (
    <CheckoutItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <span>{name}</span>
      <div><i className="fa-solid fa-circle-chevron-left" onClick={decreaseItemQuantity} ></i><CheckoutQuantity>{quantity}</CheckoutQuantity><i className="fa-solid fa-circle-chevron-right" onClick={addQuantity}></i></div>
      <span>£{price}</span>
      <i className="fa-solid fa-circle-xmark" onClick={removeItem}></i>
    </CheckoutItemContainer>
  )

}

export default CheckoutItem;
