import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  // height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    position: absolute;
    bottom: 20%;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      display: flex;
    }
  }
`
export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 5px 0 15px;
`
export const Name = styled.span`
  font-size: 1rem;
`

export const Price = styled.span`
  font-size: 0.9rem;
`
