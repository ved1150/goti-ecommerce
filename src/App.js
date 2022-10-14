import React from "react";
import { Route } from "react-router-dom";
import Header from "./--LAYOUT--/Header";
import AboutHeader from "./--ABOUTPAGE--/AboutHeader"
import HomeHeader from "./--HOMEPAGE--/HomeHeader"
import ContactUsHeader from "./--CONTACT-US-PAGE--/ContactUsHeader"
import Main from "./--LAYOUT--/Main";
import AboutMain from "./--ABOUTPAGE--/AboutMain"
import HomeMain from "./--HOMEPAGE--/HomeMain"
import ContactUsMain from "./--CONTACT-US-PAGE--/ContactUsMain"
import Footer from "./--LAYOUT--/Footer";
import AboutFooter from "./--ABOUTPAGE--/AboutFooter"
import HomeFooter from "./--HOMEPAGE--/HomeFooter"
import ContactUsFooter from "./--CONTACT-US-PAGE--/ContactUsFooter"
import StoreState from "./--STORE--/StoreState";

export default function App() {
  return (
    <div>
      <Route path="/store">
        <StoreState>
          <Header />
          <Main />
          <Footer />
        </StoreState>
      </Route>
      <Route path="/about">
        <AboutHeader />
        <AboutMain />
        <AboutFooter />
      </Route>
      <Route path="/home">
        <HomeHeader />
        <HomeMain />
        <HomeFooter />
      </Route>
      <Route path="/contact-us">
        <ContactUsHeader />
        <ContactUsMain />
        <ContactUsFooter />
      </Route>
    </div>
  );
}
