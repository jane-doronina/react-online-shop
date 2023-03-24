import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import { NavigationContainer, LogoContainer, Logo, NavLinks, NavLink} from "./navigation.styles";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { selectIsCartOpen } from "../../store/cart/cart-selector";
import Ticker from "../../components/ticker/ticker.component";
import Footer from "../../components/footer/footer";

const Navigation = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer>
          <Logo to="/">m.</Logo>
        </LogoContainer>
        <NavLinks>
         <NavLink height="2" to="/shop">SHOP</NavLink>
         { currentUser ? (<NavLink height="2" as="span" onClick={signOutUser}>SIGN OUT</NavLink>) : (<NavLink height="2" to="/sign-in">SIGN IN</NavLink>)}
         <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Ticker />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Navigation;
