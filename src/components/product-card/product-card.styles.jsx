import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 90%;
    object-fit: cover;
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

  @media screen and (max-width: 600px) {
    img {
      height: 80%;
    }

    button {
    width: 100%;
    height: 40px;
  }
  }
`
export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 5px 0 15px;

  @media screen and (max-width: 600px) {
    height: 20%;
    line-height: 1.2;
  }
`
export const Name = styled.span`
  font-size: 1rem;
`

export const Price = styled.span`
  font-size: 0.9rem;
`
