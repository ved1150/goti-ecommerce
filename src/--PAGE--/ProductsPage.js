// ----------------------------IMPORT-------------------------------------//

import React, { useContext } from "react";
import "./ProductsPage.css";
import storeContext from "../--CONTEXT--/storeContext";
import axios from "axios";

// ----------------------------ProductsPage COMPONENT-------------------------------------//

export default function ProductsPage() {
  const globalStore = useContext(storeContext);
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
  // ----------------------------ADD PRODUCT IN CONTEXT STATE-------------------------------------//

  function addElementInCart(product) {
    const checkID = globalStore.cartElements.filter(
      (item) => item.id === product.id
    ).length;
    if (checkID) {
      alert("Product already added");
    } else {
      globalStore.setTotalCount(1);
      let userEmail = globalStore.userEmail.replace(
        /[&,+()$~%@.'":*?<>{}]/g,
        ""
      );
      console.log(userEmail);
      axios
        .post(`https://crudcrud.com/api/d631ef488e1c48c3aa0cdb368056ffc0/${userEmail}`, {
          title: product.title,
          price: product.price,
          image: product.imageUrl,
        })
        .then((res) => {
          console.log(res)
          globalStore.itemAdd(true)
        })
        .catch((err) => console.log(err));
    }
  }

  // ----------------------------BASIC REACT DOM-------------------------------------//

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
            <button className="add" onClick={() => addElementInCart(product)}>
              Add To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
