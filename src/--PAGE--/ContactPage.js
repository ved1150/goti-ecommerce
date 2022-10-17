// ----------------------------IMPORT-------------------------------------//

import React, { useState } from "react";
import "./ContactPage.css";

// ----------------------------ContactPage COMPONENT-------------------------------------//

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  // ----------------------------MANAGE FORM & BUTTON-------------------------------------//

  function handlerFormData(event) {
    setFormData((pre) => ({
      ...pre,
      [event.target.name]: event.target.value,
    }));
  }
  function sendFormData(event) {
    event.preventDefault();
    fetch(
      "https://ecommerce-sharpener-10564-default-rtdb.firebaseio.com/userInfo.json",
      {
        method: "POST",
        body: JSON.stringify(formData),
      }
    );
  }

  // ----------------------------BASIC REACT DOM-------------------------------------//

  return (
    <div className="contactUsForm">
      <form onSubmit={sendFormData}>
        <div className="nameInput">
          <label for="name">Name:</label>
          <input
            className="inputOfContactUs"
            type="text"
            onChange={handlerFormData}
            name="name"
          />
        </div>
        <div className="emailInput">
          <label for="email">Email Id:</label>
          <input
            className="inputOfContactUs"
            type="text"
            onChange={handlerFormData}
            name="email"
          />
        </div>
        <div className="numberInput">
          <label for="number">Phone Number:</label>
          <input
            className="inputOfContactUs"
            type="text"
            onChange={handlerFormData}
            name="number"
          />
        </div>
        <button className="btnOfContactUs">send</button>
      </form>
    </div>
  );
}
