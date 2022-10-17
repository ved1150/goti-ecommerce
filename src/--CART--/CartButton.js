// ----------------------------IMPORT-------------------------------------//

import React, { useState, useContext } from "react";
import Cart from "./Cart";
import storeContext from "../--CONTEXT--/storeContext";

// ----------------------------CartButton COMPONENT-------------------------------------//

export default function CartButton() {
  const globalStore = useContext(storeContext);
  const [isOpen, setIsOpen] = useState(false);

  // ----------------------------LOGIC FOR BUTTON OPEN-CLOSE(use useState)-------------------------------------//

  function showTheCart() {
    setIsOpen(true);
  }
  function hideTheCart() {
    setIsOpen(false);
  }

  // ----------------------------BASIC REACT DOM-------------------------------------//

  return (
    <div>
      <button onClick={showTheCart}>cart {globalStore.totalElements}</button>
      <Cart open={isOpen} close={hideTheCart} />
    </div>
  );
}
