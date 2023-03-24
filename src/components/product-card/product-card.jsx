import { useDispatch } from "react-redux";

import { ProductCardContainer, Footer, Name, Price } from "./product-card.styles";
import "../button/button";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import { addItemToCart } from "../../store/cart/cart-reducer";

const ProductCard = ({product}) => {
  const {name, price, imageUrl} = product;
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(product));

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`}/>
      <Footer>
        <Name>{name}</Name>
        <Price>{price} GBP</Price>
      </Footer>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
    </ProductCardContainer>
  )
}

export default ProductCard;
