import React from "react";
import "../css/signUp.css";

export const SignUp = () => {
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
            />
          </div>
          <div className="signUpContent3">
            <div className="signUpContent3Text">User name</div>
            <input
              className="signUpContent3Inp"
              placeholder=" Enter your user name "
            />
          </div>
          <div className="signUpContent3">
            <div className="signUpContent3Text">Password</div>
            <input
              className="signUpContent3Inp"
              placeholder=" Enter your password "
            />
          </div>
          <div className="signUpContent3">
            <div className="signUpContent3Text">Confirm Password</div>
            <input
              className="signUpContent3Inp"
              placeholder=" Enter your Password "
            />
          </div>
          <div className="signUpContent4">
            <button className="signUpContentBtn">Register</button>
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
