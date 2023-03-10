import React, { useState } from "react";
import "../css/signUp.css";
import axios from "axios";

export const SignUp = () => {
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const postData = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    if (password === password1) {
      console.log("Passwords match");
      axios
        .post("http://localhost:8000/user", {
          email: email,
          password: password,
          username: username,
        })
        .then((res) => alert(res?.data))
        .catch((err) => console.log(err));
    } else {
      alert("Password dont match");
    }
  };
  return (
    <div className="signUp">
      <div className="signUpSize">
        <div className="signUpContent">
          <div className="signUpContent1">Welcome !</div>
          <div className="signUpContent2">Sign up to</div>
          <div className="signUpContent3">
            <div className="signUpContent3Text">Email</div>
            <input
              className="signUpContent3Inp"
              placeholder=" Enter your email "
              value={email}
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signUpContent3">
            <div className="signUpContent3Text">User name</div>
            <input
              className="signUpContent3Inp"
              placeholder=" Enter your user name "
              value={username}
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="signUpContent3">
            <div className="signUpContent3Text">Password</div>
            <input
              className="signUpContent3Inp"
              placeholder=" Enter your password "
              value={password}
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="signUpContent3">
            <div className="signUpContent3Text">Confirm Password</div>
            <input
              className="signUpContent3Inp"
              placeholder=" Enter your Password "
              type="text"
              onChange={(e) => setPassword1(e.target.value)}
            />
          </div>
          <div className="signUpContent4">
            <button onClick={postData} className="signUpContentBtn">
              Register
            </button>
            <div className="signUpContentContent">
              <div className="signUpContentContentText1">
                Already have an Account ?
              </div>
              <div className="signUpContentContentText2">Register</div>
            </div>
          </div>
        </div>
        <div className="signUpImg"></div>
      </div>
    </div>
  );
};
