import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./navigation.scss"
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link className="logo" to="/">w.</Link>
        </div>
        <div className="nav-links">
         <Link className="nav-link" to="/shop">SHOP</Link>
         { currentUser ? (<span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>) : (<Link className="nav-link" to="/sign-in">SIGN IN</Link>)}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
