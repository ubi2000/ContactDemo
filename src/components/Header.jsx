import React from "react";
import "./Header.css";
import ShopLogo from "../images/shoplog.png";
import Logo from "../images/cartlogo.png";
import Icon from "../images/icon.png";

const Header = () => {
  return (
    <div className="header">
      <div className="left-logo">
        <img src={ShopLogo} alt="alt"></img>
        <h2>General Store</h2>
      </div>
      <nav className="navbar">
        <ul className="items">
          <li>Home </li>
          <li>Products</li>
          <li>About</li>
        </ul>
      </nav>
      <div className="cart-div">
        <ul>
          <img src={Logo} alt="alt"></img>

          <button>Login</button>
          <img src={Icon} alt="alt" />
        </ul>
      </div>
    </div>
  );
};
export default Header;
