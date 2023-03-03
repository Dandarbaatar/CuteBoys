import "../App.css";
import { Button } from "./button";
import logoWhite from "../assets/logoWhite.svg";
import searchButton from "../assets/search.svg";

function Header(props) {
  return (
    <div className={props.headerClass || "header"}>
      <div className="headerTop">
        <div className="headerTopLeft">
          <div className="headerTopLeftSon">
            <Button text="News" />
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
          <Button text="Home" />
          <Button text="Feature" />
          <Button text="Shop" />
          <Button text="Gallery" />
          <Button text="Blog" />
          <Button text="About" />
          <Button text="Contact" />
        </div>
        <div className="headerBottomRight">
          <div className="headerBottomRightSon">
            <button className="button">
              <img src={searchButton} alt="" />
            </button>
            <Button class="subButton" text="Subscribe" />
          </div>
        </div>
      </div>
      <div className="headerLine"></div>
    </div>
  );
}
export default Header;
