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

  @media screen and (max-width: 600px) {
    width: 100vw;
  }
`

export const CartItems = styled.div`
  height: 240px;
  position: relative;
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

export const ShevronDown = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  ${'' /* transition: 5s; */}
  background: linear-gradient(0deg, rgba(255,255,255,1), rgba(255,255,255,0));

  i {
   font-size: 1.3rem;
  }
`
