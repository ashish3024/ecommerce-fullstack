import React, { useContext, useState } from "react";


import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";


const Navbar = () => {
  const [menu, setMenu] = useState("shop");
 const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className="navbar">
     
      <div className="nav-logo" onClick={() => setMenu("shop")}>
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>

      {/* Navigation Menu */}
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link style={{textDecoration:'none'}} to="/"> Shop</Link>
          {menu === "shop" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link style={{textDecoration:'none'}}to="/mens"> Men</Link>
          {menu === "mens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link style={{textDecoration:'none'}}to="/womens"> Women</Link>
          
          {menu === "womens" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link style={{textDecoration:'none'}}to="/kids"> Kids</Link>
          
          {menu === "kids" ? <hr /> : null}
        </li>
      </ul>
        {/* Cart Icon */}
        <div className="nav-login-cart">
          {localStorage.getItem("auth-token") ? <button onClick={()=>{localStorage.removeItem("auth-token"); window.location.replace("/");}}>Logout</button> : <Link to="/login"><button>Login</button></Link>}
          <Link to='/cart'><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  );
};

export default Navbar;

