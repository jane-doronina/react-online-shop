import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  border-bottom: 1.5px solid lightgrey;
  padding: 15px 0;

  img {
    width: 100%;
  }
`

export const CheckoutQuantity = styled.span`
  margin: 0 10px;
`
