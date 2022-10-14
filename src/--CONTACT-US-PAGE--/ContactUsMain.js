import React, { useState } from "react";
import "./ContactUsMain.css"
export default function ContactUsMain() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  function handlerFormData(event) {
    setFormData((pre) => ({
      ...pre,
      [event.target.name]: event.target.value,
    }));
  }
  function sendFormData(event) {
    event.preventDefault();
    fetch("https://ecommerce-sharpener-10564-default-rtdb.firebaseio.com/userInfo.json" ,{
        method:"POST" ,
        body: JSON.stringify(formData)
    })
  }

  return (
    <div className="contactUsForm">
      <form onSubmit={sendFormData}>
        <div className="nameInput">
          <label for="name">Name:</label>
          <input type="text" onChange={handlerFormData} name="name" />
        </div>
        <div className="emailInput">
          <label for="email">Email Id:</label>
          <input type="text" onChange={handlerFormData} name="email" />
        </div>
        <div className="numberInput">
          <label for="number">Phone Number:</label>
          <input type="text" onChange={handlerFormData} name="number" />
        </div>
        <button>send</button>
      </form>
    </div>
  );
}
