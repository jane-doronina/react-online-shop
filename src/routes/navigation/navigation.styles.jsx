import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
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
`

export const NavLink = styled(Link)`
  cursor: pointer;
  margin-left: 20px;
`
