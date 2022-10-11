import React from "react";
import { Route } from "react-router-dom";
import Header from "./--LAYOUT--/Header";
import AboutHeader from "./--ABOUTPAGE--/AboutHeader"
import HomeHeader from "./--HOMEPAGE--/HomeHeader"
import Main from "./--LAYOUT--/Main";
import AboutMain from "./--ABOUTPAGE--/AboutMain"
import HomeMain from "./--HOMEPAGE--/HomeMain"
import Footer from "./--LAYOUT--/Footer";
import AboutFooter from "./--ABOUTPAGE--/AboutFooter"
import HomeFooter from "./--HOMEPAGE--/HomeFooter"
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
    </div>
  );
}
