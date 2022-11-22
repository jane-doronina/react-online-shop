import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.scss"

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="logo-container">
          <Link className="logo" to="/">w.</Link>
        </div>
        <div className="nav-links">
         <Link className="nav-link" to="/shop">SHOP</Link>
         <Link className="nav-link" to="/sign-in">SIGN IN</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
