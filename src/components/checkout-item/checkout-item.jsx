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
      <span className="product-name">{name}</span>
      <div className="quantity"><i class="fa-solid fa-circle-minus" onClick={decreaseItemQuantity} ></i><CheckoutQuantity>{quantity}</CheckoutQuantity><i class="fa-solid fa-circle-plus" onClick={addQuantity}></i></div>
      <span className="price">£{price}</span>
      <i className="fa-solid fa-circle-xmark" onClick={removeItem}></i>
    </CheckoutItemContainer>
  )

}

export default CheckoutItem;
