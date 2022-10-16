import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartButton from "../--CART--/CartButton";
import "./Header.css";
import storeContext from "../--STORE--/storeContext";
export default function Header() {
  let a = useContext(storeContext);
  return (
    <React.Fragment>
      <div className="header">
        <div className="upperPart">
          <Link to="/home" style={{ fontSize: 30 }}>
            Home
          </Link>
          <Link to="/store" style={{ fontSize: 30 }}>
            Product
          </Link>
          <Link to="/about" style={{ fontSize: 30 }}>
            About
          </Link>
          <Link to="/contact-us" style={{ fontSize: 30 }}>
            Contact-Us
          </Link>
          {!a.userIsLogin && (
            <Link to="/log-in" style={{ fontSize: 30 }}>
              Log-In
            </Link>
          )}
          <CartButton />
        </div>
        <div className="lowerPart">
          <h1>The Generics</h1>
        </div>
      </div>
    </React.Fragment>
  );
}
