import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <div className="upperPart">
          <Link to="/home" style={{ fontSize: 30 }}>
            Home
          </Link>
          <Link to="/store" style={{ fontSize: 30 }}>
            Store
          </Link>
          <Link to="/about" style={{ fontSize: 30 }}>
            About
          </Link>
        </div>
        <div
          className="lowerPart"
          style={{ backgroundColor: "gray", height: 400 }}
        >
          <h1>The Generics</h1>
            <button className="buttonStyle">Get our Latest Album</button>
            <img
              className="playIcon"
              src="https://cdn-icons-png.flaticon.com/512/1666/1666608.png"
              alt=""
              width="100"
              height="100"
            />
        </div>
      </div>
    </React.Fragment>
  );
}
