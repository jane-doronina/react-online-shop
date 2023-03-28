import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  border-bottom: 1.5px solid lightgrey;
  padding: 15px 0;

  img {
    width: 100%;
    height: 213px;
    object-fit: cover;
  }

  @media screen and (max-width: 600px) {
    display: flex;

    img {
      width: 20%;
      height: 90px;
      object-fit: cover;
    }
  }
`

export const CheckoutQuantity = styled.span`
  margin: 0 10px;
`
