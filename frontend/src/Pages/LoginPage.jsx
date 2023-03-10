import React from "react";
import "../css/login.css";
import pic from "../assets/small-team-discussing-ideas-2194220-0.png";
// import axios from "axios";

function LoginPage() {
  // const [pass, setPass] = useState("");
  // const [email2, setEmail2] = useState("");
  // const [username1, setUsername1] = useState("");
  // const loginUser = async () => {
  //   try {
  //     const res = await axios({
  //       url: "http://localhost:8000/login",
  //       method: "POST",
  //       data: {
  //         password: pass,
  //         username1: username1,
  //       },
  //       headers: {
  //         // authorization: `bearer ${token}`,
  //       },
  //     });
  //     console.log(res);

  //     if (res?.status === 200) {
  //       console.log(res);
  //       const token = res?.data?.token;
  //       const id = res?.data?.id;
  //       localStorage.setItem("token", token);
  //       localStorage.setItem("username", email2);
  //       localStorage.setItem("id", id);
  //       window.location = "profile";
  //     }
  //     //  else if (err.status === 500) {
  //     //   alert("Incorrect or password");
  //     // }
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };
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
                placeholder="Enter your user name"
                className="login_input"
              />
            </div>
            <div className="login_h">
              <div className="login_password1">
                <div>Password</div>
                <input
                  className="login_password"
                  type="text"
                  placeholder="●●●●●●"
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
              width: "72vw",
              height: "111vh",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
