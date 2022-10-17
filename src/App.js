// ----------------------------IMPORT-------------------------------------//

import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Main from "./--PAGE--/ProductsPage";
import AboutMain from "./--PAGE--/AboutPage";
import HomeMain from "./--PAGE--/HomePage";
import ContactUsMain from "./--PAGE--/ContactPage";
import AuthForm from "./--PAGE--/LoginPage";
import storeContext from "./--CONTEXT--/storeContext";

// ----------------------------App COMPONENT-------------------------------------//

export default function App() {
  const a = useContext(storeContext);

  // ----------------------------BASIC REACT DOM (for path url=>Route, Redirect) -------------------------------------//

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
