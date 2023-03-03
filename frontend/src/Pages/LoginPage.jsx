import React from "react";
import "../css/login.css";
import pic from "../assets/small-team-discussing-ideas-2194220-0.png";

function LoginPage() {
  return (
    <div className="login_container">
      <div className="login_body">
        <div className="login_first">
          <div className="login_welcome">Welcome!</div>
          <div>
            <div className="login_signin">Sign in to </div>
            <div>News Website</div>
          </div>

          <div className="login_usrpas">
            <div className="login_username">
              <div>User Name</div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter your user name"
                className="login_input"
              />
            </div>
            <div className="login_h">
              <div className="login_password1">
                <div>Password</div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your password"
                  className="login_password"
                />
              </div>
              <div className="login_jus">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "6vw",
                    justifyContent: "space-between",
                  }}
                >
                  <input type="checkbox" />
                  <div className="">Remember me</div>
                </div>
                <button className="login-but1">Forgot password</button>
              </div>
            </div>
          </div>

          <div>
            <button className="login_login">Login</button>
          </div>
          <div className="log_last">
            Don’t have an Account ?
            <button className="login-but">Register</button>
          </div>
        </div>
        <div className="login_second">
          <img
            src={pic}
            alt=""
            style={{
              width: "44vw",
              height: "64vh",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
