import { useSelector } from "react-redux";

import CheckoutItem from "../../components/checkout-item/checkout-item";
import { CheckoutContainer, TotalPrice } from "./checkout.styles";
import { selectCartTotal, selectCartItems } from "../../store/cart/cart-selector";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <h3>Your shopping bag</h3>
      {cartItems.map((item) => <CheckoutItem key={item.id} checkoutItem={item}/>)}
      <TotalPrice>
        <span>TOTAL: £{cartTotal}</span>
      </TotalPrice>
      <PaymentForm />
    </CheckoutContainer>
  )
}

export default Checkout;
