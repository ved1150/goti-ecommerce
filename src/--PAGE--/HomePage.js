// ----------------------------IMPORT-------------------------------------//
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Main from "../Main/Main";
import Section1 from "../Main/Section1";
import Section2 from "../Main/Section2";
import Section3 from "../Main/Section3";
import Section4 from "../Main/Section4";
import Section5 from "../Main/Section5";
import Section6 from "../Main/Section6";
import "./HomePage.css";

// ----------------------------HomePage COMPONENT-------------------------------------//

export default function HomePage() {
  let arr = [
    {
      date: "JUL 16",
      state: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 19",
      state: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 22",
      state: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 29",
      state: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "AUG 2",
      state: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "AUG 7",
      state: "DETROIT, MI",
      place: "DTE ENERGY MUSIC THEATRE",
    },
  ];

  // ----------------------------BASIC REACT DOM-------------------------------------//

  return (
    <Fragment>
      <Main />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </Fragment>
  );
}
