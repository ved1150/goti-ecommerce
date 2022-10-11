import React, { useContext } from "react";
import "./Main.css";
import storeContext from "../--STORE--/storeContext";

export default function Main() {
  const a = useContext(storeContext);

  const products = [
    {
      id: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 4,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  function addElementInCart(product) {
    console.log("click map" + a.cartElements);

    const checkID = a.cartElements.filter((item) => (item.id === product.id)).length
      console.log(checkID);
      if (checkID) {
        alert("Product already added");
        
      } else {
        a.totalElements = a.totalElements + 1;
        return a.cartElements.push(product);
      }
    }
  return (
    <div className="product">
      {products.map((product) => {
        return (
          <div>
            <h2>
              {product.id}. {product.title}
            </h2>
            <img src={product.imageUrl} alt="" />
            <h3>{product.price}$</h3>
            <button className="add" onClick={()=> addElementInCart(product)}>
              Add To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
