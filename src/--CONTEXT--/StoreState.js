// ----------------------------IMPORT-------------------------------------//

import { useState } from "react";
import StoreContext from "./storeContext";
import Header from "../--LAYOUT--/Header";
import Footer from "../--LAYOUT--/Footer";

// ----------------------------StoreState CONTEXT-API COMPONENT-------------------------------------//

export default function StoreState(props) {
  const [totalElements, setTotalElements] = useState(0);
  const [productAdd , setProductAdd] = useState(false)
  const [token, setToken] = useState(null);
  const tokenIsAvilable = !!token;
  const [email, setEmail] = useState("");


  // ----------------------------StoreState Global Store-------------------------------------//

  const cart = {
    cartElements:[],
    setTotalCount: (pre) => {
      setTotalElements(totalElements + pre);
    },
    login: (token , email) => { 
      setToken(token)
      setEmail(email)
    },
    userIsLogin: tokenIsAvilable,
    tokenId: token,
    userEmail : email,
    itemAdd : (action) => setProductAdd(action),
    itemIsAvilable : productAdd
  };

  // ----------------------------BASIC REACT DOM-------------------------------------//

  return (
    <StoreContext.Provider value={cart}>
      <Header />
      {props.children}
      <Footer />
    </StoreContext.Provider>
  );
}
