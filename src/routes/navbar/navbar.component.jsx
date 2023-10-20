import { Outlet } from "react-router-dom";

const NavBar = () => {
    return (
      <div>
        <h1>I am the NAV BAR</h1>
        <Outlet />
      </div>
    );
};
  
export default NavBar;