import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Main from "./--LAYOUT--/Main";
import AboutMain from "./--ABOUTPAGE--/AboutMain";
import HomeMain from "./--HOMEPAGE--/HomeMain";
import ContactUsMain from "./--CONTACT-US-PAGE--/ContactUsMain";
import AuthForm from "./--LOGIN-PAGE--/AuthForm";
import storeContext from "./--STORE--/storeContext";
export default function App() {
  const a = useContext(storeContext);
  return (
    <div>
      {a.userIsLogin && (
        <Route path="/store">
          <Main />
        </Route>
      )}
      <Route path="/about">
        <AboutMain />
      </Route>
      <Route path="/home">
        <HomeMain />
      </Route>
      <Route path="/contact-us">
        <ContactUsMain />
      </Route>
      {!a.userIsLogin && (
        <Route path="/log-in">
          <AuthForm />
        </Route>
      )}
      {a.userIsLogin && (
        <Route path="/log-in">
          <Redirect to={"./store"} />
        </Route>
      )}
      {!a.userIsLogin && (
        <Route path="/store">
          <Redirect to={"./log-in"} />
        </Route>
      )}
    </div>
  );
}
