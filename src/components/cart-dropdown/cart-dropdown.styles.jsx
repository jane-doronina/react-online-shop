import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 450px;
  padding: 10px 20px 20px;
  background-color: white;
  top: 93px;
  right: 0;
  z-index: 5;
  box-shadow: -10px 5px 14px -7px rgba(0,0,0,0.5);

  button {
    margin-top: auto;
  }

  h4, p {
    text-align: center;
  }
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: 20px;
  scroll-margin-right: 5px;
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const Subheading = styled.p`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 8px 0;
  font-size: 0.9rem;
`
