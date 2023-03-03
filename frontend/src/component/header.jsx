import "../App.css";
import { Button } from "./button";
import logoWhite from "../assets/logoWhite.svg";
import searchButton from "../assets/search.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className={props.headerClass || "header"}>
      <div className="headerTop">
        <div className="headerTopLeft">
          <div className="headerTopLeftSon">
            <Link to="/news-detail">
              <Button text="News" />
            </Link>
            <Button text="Innovation" />
            <Button text="Science" />
            <Button text="Industry" />
          </div>
        </div>
        <div className="headerTopRight">
          <div className="headerTopRightSon">
            <Button text="FB" />
            <Button text="IG" />
            <Button text="YT" />
          </div>
        </div>
      </div>
      <div className="headerLine"></div>
      <div className="headerBottom">
        <div className="headeraBottomLeft">
          <img src={logoWhite} className="logoWhite" alt="" />
          <Link to="/">
            <Button text="Home" />
          </Link>
          <Button text="Feature" />
          <Button text="Shop" />
          <Button text="Gallery" />
          <Button text="Blog" />
          <Button text="About" />
          <Link to="/author">
            <Button text="Contact" />
          </Link>
        </div>
        <div className="headerBottomRight">
          <div className="headerBottomRightSon">
            <Link to="/search">
              <button className="button">
                <img src={searchButton} alt="" />
              </button>
            </Link>
            <Button class="subButton" text="Login/SignUp" />
          </div>
        </div>
      </div>
      <div className="headerLine"></div>
    </div>
  );
}
export default Header;
