import React, { Fragment } from "react";
import "./Main.css"
export default function Section2() {
  return (
    <Fragment>
      <div class="section2">
        <section>
          <em>Category</em>
          <h1 class="title">Our Categories</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod. Tempor incididunt ut labore…
          </p>
        </section>
        <section>
          <span>
            <img
              src="https://i.postimg.cc/ncbRDT90/card-1.jpg"
              alt=""
              loading="lazy"
            />
            <p>Candles</p>
          </span>
          <span>
            <img
              src="https://i.postimg.cc/4ytW0Hq6/card-2.jpg"
              alt=""
              loading="lazy"
            />
            <p>Accessories</p>
          </span>
          <span>
            <img
              src="https://i.postimg.cc/2SC0H6wW/card-3.jpg"
              alt=""
              loading="lazy"
            />
            <p>Gift Set</p>
          </span>
        </section>
      </div>
    </Fragment>
  );
}
