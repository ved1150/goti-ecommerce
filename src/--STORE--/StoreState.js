import { useState } from "react";
import StoreContext from "./storeContext";
import Header from "../--LAYOUT--/Header";
import Footer from "../--LAYOUT--/Footer";
export default function StoreState(props) {
  const [totalElements, setTotalElements] = useState(0);
  const [token, setToken] = useState(null);
  const tokenIsAvilable = !!token;
  console.log(tokenIsAvilable);
  const cart = {
    cartElements: [],
    totalElements: totalElements,
    setTotalCount: (pre) => {
      setTotalElements(totalElements + pre);
    },
    login: (token) => setToken(token),
    userIsLogin: tokenIsAvilable,
    tokenId: token,
  };
  return (
    <StoreContext.Provider value={cart}>
      <Header />
      {props.children}
      <Footer />
    </StoreContext.Provider>
  );
}
