import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  margin-bottom: 15px;

  img {
    width: 25%;
    height: 100%;
    object-fit: cover;
  }
`

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span {
    font-size: 16px;
  }
`
