// ----------------------------IMPORT-------------------------------------//

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

// ----------------------------Footer COMPONENT-------------------------------------//

export default function Footer() {
  // ----------------------------BASIC REACT DOM-------------------------------------//

  return (
    <React.Fragment>
      <footer>
        <div className="top_header">
          <section>
            <img src="https://i.postimg.cc/FFJCzwzY/icon-3.png" alt="" />
            <h1 className="title">Newsletter</h1>
            <form>
              <fieldset>
                <input
                  type="email"
                  name="email"
                  placeholder="email address*"
                  requried=""
                />
                <button className="btn2">subscribe</button>
              </fieldset>
            </form>
          </section>
        </div>
        <span className="border-shape"></span>
        <div className="bottom_content">
          {/* <section>
            <a to="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a to="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a to="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a to="#">
              <i className="fa fa-telegram"></i>
            </a>
          </section> */}
          <section>
            <Link to="#">Home</Link>
            <Link to="#">About us</Link>
            <Link to="#">Order</Link>
            <Link to="#">Retail</Link>
            <Link to="#">Member</Link>
            <Link to="#">Contact Us</Link>
          </section>
        </div>
        <div className="copyright">
          Copyright © 2021 websitename - All rights reserved
        </div>
      </footer>
    </React.Fragment>
  );
}
