import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;

  svg {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 600px) {
    width: auto;
  }
`

export const ItemCount = styled.span`
  position: absolute;
  font-size: 13px;
  font-weight: bold;
  bottom: 8px;
`
