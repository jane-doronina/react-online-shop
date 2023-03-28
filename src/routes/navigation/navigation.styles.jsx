import styled from "styled-components";
import { Link } from "react-router-dom";
import { LinkWithHover } from "../../components/footer/footer.styles";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  padding: 0 40px;

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`

export const LogoContainer = styled.div`
  height: 100%;
  width: 70px;
`

export const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: bolder;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 600px) {
    width: 70%;
  }
`

export const NavLink = styled(LinkWithHover)`
  font-weight: 400;
  cursor: pointer;
  margin-left: 20px;
`
