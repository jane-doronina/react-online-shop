import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  // width: 240px;
  // height: 340px;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  button {
    margin-top: auto;
  }
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: 10px;
  scroll-margin-right: 5px;
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`
