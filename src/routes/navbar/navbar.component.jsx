import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import LOGO from '../../assets/imgs/RE_logo.png'

import "./navbar.styles.scss";

const NavBar = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
            <img src={LOGO} style={{height: "70px"}} />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
