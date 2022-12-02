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
      <nav>
        <div className="topnav myTopnav">
          <Link to="/home" className="logo">
            <img src="https://i.postimg.cc/Y9TX8zn2/icon-1.png" alt="LOGO " />{" "}
            <b>Logo.</b>
          </Link>
          <Link to="/about" className="animate">
            About
          </Link>
          <Link to="/contact-us" className="animate">
            Contact-Us
          </Link>
          <Link to="/store" className="animate">
            Product
          </Link>
          <Link to="/home" className="animate">
            Home
          </Link>
        </div>
        {/* <div className="navbar">
          <Link to="/home" className="logo2">
            <img src="https://i.postimg.cc/Y9TX8zn2/icon-1.png" alt="" />{" "}
            <b>Logo.</b>
          </Link>
          <Link to="/about" className="animate">
            About
          </Link>
          <Link to="/contact-us" className="animate">
            Contact-Us
          </Link>
          <Link to="/store" className="animate">
            Product
          </Link>
          <Link to="/home" className="animate active2">
            Home
          </Link>
        </div> */}
      </nav>
    </React.Fragment>
  );
}
