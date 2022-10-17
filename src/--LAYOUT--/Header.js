// ----------------------------IMPORT-------------------------------------//

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartButton from "../--CART--/CartButton";
import "./Header.css";
import storeContext from "../--CONTEXT--/storeContext";

// ----------------------------Header COMPONENT-------------------------------------//

export default function Header() {
  let globalStore = useContext(storeContext);
  // ----------------------------BASIC REACT DOM (Use - Router for LINK)-------------------------------------//

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
          {!globalStore.userIsLogin && (
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
