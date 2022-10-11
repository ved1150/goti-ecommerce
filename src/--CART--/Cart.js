import React, { useContext, useState } from "react";
import "./Cart.css";
import storeContext from "../--STORE--/storeContext";

export default function Cart(props) {
  const a = useContext(storeContext);
  console.log(a);
  let [cartElements, setCartElements] = useState(a.cartElements);

  if (!props.open) return;
  function removeItemFromCart(cartItem) {
    setCartElements(
      () =>
        (cartElements = cartElements.filter(
          (element) => element.id !== cartItem.id
        ))
    );
    a.cartElements = cartElements
    a.totalElements = a.totalElements -1
  }
  console.log(a.cartElements)
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
              <img src={cartItem.imageUrl} alt="" width={70} height={70} />
              <h4> {cartItem.title}</h4>
            </div>
            <h3 className="price">{cartItem.price}$</h3>
            <div className="quantity">
              <input type="number" min="1" max="1" value="1" />
              <button className="remove" onClick={() => removeItemFromCart(cartItem)}>
                Remove
              </button>
            </div>
            <br />
          </div>
        );
      })}
      <button className="purchase">PURCHASE</button>
    </div>
  );
}
