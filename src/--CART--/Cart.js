// ----------------------------IMPORT-------------------------------------//

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";
import storeContext from "../--CONTEXT--/storeContext";

// ----------------------------Cart COMPONENT-------------------------------------//

export default function Cart(props) {
  const globalStore = useContext(storeContext);
  let [cartElements, setCartElements] = useState([]);
  let [remove, setRemove] = useState(false);
  let userEmail = globalStore.userEmail.replace(/[&,+()$~%@.'":*?<>{}]/g, "");
  useEffect(() => {
    axios
      .get(
        `https://crudcrud.com/api/d631ef488e1c48c3aa0cdb368056ffc0/${userEmail}`
      )
      .then((res) => {
        setCartElements(res.data);
        globalStore.itemAdd(false);
        setRemove(false);
      });
  }, [props.open, globalStore.itemIsAvilable, remove]);
  if (!props.open) return;

  // ----------------------------PURCHASE BUTTON T&C-------------------------------------//

  function purchase() {
    if (cartElements.length !== 0) {
      setCartElements(() => (globalStore.cartElements = []));
      globalStore.totalElements = 0;
      alert("Thank you for Purchase");
    } else {
      alert("you don't have product in cart ! ");
    }
  }

  // ----------------------------REMOVE ITEM-------------------------------------//

  function removeItemFromCart(cartItem) {
    axios
      .delete(
        `https://crudcrud.com/api/d631ef488e1c48c3aa0cdb368056ffc0/${userEmail}/${cartItem._id}`
      )
      .then((res) => {
        console.log("ok delete");
        setRemove(true);
      });

    // globalStore.cartElements = cartElements;
    // globalStore.totalElements = globalStore.totalElements - 1;
  }

  // ----------------------------BASIC REACT DOM-------------------------------------//

  return (
    <div className="Cart">
      <img
        className="cancle-icon"
        src="https://cdn-icons-png.flaticon.com/512/4347/4347434.png"
        alt=""
        onClick={props.close}
        width={30}
        height={30}
      />
      <h1 className="centerTheCartName">Cart</h1>
      <div className="product-info-tag">
        <h3 className="item">ITEM</h3>
        <h3 className="price">PRICE</h3>
        <h3 className="quantity">QUANTITY</h3>
      </div>
      {cartElements.map((cartItem) => {
        return (
          <div className="CartItem">
            <div className="item">
              <img src={cartItem.image} alt="" width={70} height={70} />
              <h4> {cartItem.title}</h4>
            </div>
            <h3 className="price">{cartItem.price}$</h3>
            <div className="quantity">
              <input type="number" min="1" max="1" value="1" />
              <button
                className="remove"
                onClick={() => removeItemFromCart(cartItem)}
              >
                Remove
              </button>
            </div>
            <br />
          </div>
        );
      })}
      <button onClick={purchase} className="purchase">
        PURCHASE
      </button>
    </div>
  );
}
