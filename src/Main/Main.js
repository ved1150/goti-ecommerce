import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Main.css"
export default function Main() {
  return (
    <Fragment>
      <main>
        <section>
          <em>Eco friendly</em>
          <h1 class="title">
            We like to think of our wares as full sensory experiences!
          </h1>
          <Link to="#" className="btn1">
            LEARN MORE
          </Link>
        </section>
      </main>
    </Fragment>
  );
}
