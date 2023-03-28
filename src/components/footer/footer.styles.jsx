import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background: black;
  width: 100vw;
  height: 168px;
  position: absolute;
  bottom: 0;
  color: white;
  padding: 20px 40px;
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    height: 280px;
  }
`

export const LinkWithHover = styled(Link)`
  color: ${(props) => props.color || "black"};
  font-weight: 300;
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: ${(props) => props.height || 1}px;
    bottom: 0;
    left: 0;
    background-color: ${(props) => props.color || "black"};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`
export const LinksContainer = styled.div`
  width: 35%;
  border-left: 1px solid white;

  ul {
    list-style: none;
    line-height: 1.5;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    border-top: 1px solid white;
    border-left: none;

    ul {
      columns: 2;
      padding-left: 0;
    }
  }
`

export const TextContainer = styled.div`
  width: 65%;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`
