import React, { Fragment } from "react";
import "./Main.css"
export default function Section3() {
  return (
    <Fragment>
      <div class="section3">
        <section>
          <figure>
            <img
              src="https://i.postimg.cc/W1SXxvWH/01.jpg"
              alt=""
              loading="lazy"
            />
          </figure>
        </section>
        <section>
          <span>
            <em>About Us</em>
            <h1 class="title">
              We like to think of our wares as full sensory experiences!
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
            <p>
              Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit.
            </p>
            <a href="#" class="btn1">
              Contact Us
            </a>
          </span>
        </section>
      </div>
    </Fragment>
  );
}
