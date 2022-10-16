import React, { useContext, useRef } from "react";
import storeContext from "../--STORE--/storeContext";
export default function AuthForm() {
  const a = useContext(storeContext);
  const emailBox = useRef();
  const passwordBox = useRef();

  function formHandler(event) {
    event.preventDefault();
    let emailEntered = emailBox.current.value;
    let passwordEntered = passwordBox.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBrBgAA8XtM0mbY_5-gVCuhUpIBZZ6FQCo",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailEntered,
          password: passwordEntered,
          returnSecureToken: true,
        }),
      }
    ).then((ref) => {
      if (ref.ok) {
        console.log("ok");
        ref.json().then((data) => a.login(data.idToken));
      } else {
        ref.json().then((data) => console.log(data.error));
      }
    });
  }
  return (
    <div className="authform">
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <form onSubmit={formHandler}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ textAlign: "center" }} for="email">
            Email
          </label>
          <input
            type="text"
            name="email"
            style={{ width: 300, margin: "auto" }}
            ref={emailBox}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ textAlign: "center" }} for="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            style={{ width: 300, margin: "auto" }}
            ref={passwordBox}
          />
        </div>
        <button style={{ margin: "auto" }}>Login</button>
      </form>
    </div>
  );
}
