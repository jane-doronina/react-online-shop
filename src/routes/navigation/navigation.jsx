import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.scss"
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // }

  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link className="logo" to="/">w.</Link>
        </div>
        <div className="nav-links">
         <Link className="nav-link" to="/shop">SHOP</Link>
         { currentUser ? (<span className="nav-link" onClick={signOutUser}>SIGN OUT</span>) : (<Link className="nav-link" to="/sign-in">SIGN IN</Link>)}
         <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
