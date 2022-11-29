import "./checkout-item.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({checkoutItem}) => {
  const {imageUrl, name, price, quantity} = checkoutItem;
  const { addItemToCart, deleteItem, decreaseQuantity } = useContext(CartContext);

  const addQuantity = () => addItemToCart(checkoutItem);

  const removeItem = () => deleteItem(checkoutItem);

  const decreaseItemQuantity = () => decreaseQuantity(checkoutItem);

  return (
    <div className="checkout-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <span>{name}</span>
      <div><i className="fa-solid fa-circle-chevron-left" onClick={decreaseItemQuantity} ></i><span className="checkout-quantity">{quantity}</span><i className="fa-solid fa-circle-chevron-right" onClick={addQuantity}></i></div>
      <span>£{price}</span>
      <i className="fa-solid fa-x" onClick={removeItem}></i>
    </div>
  )

}

export default CheckoutItem;
