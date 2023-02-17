import "../App.css";
import { Button } from "./button";

function Header() {
  return (
    <div className="header">
      <div className="headerTop">
        <div className="headerTopLeft">
          <div className="headerTopLeftSon">
            <Button text="News" />
            <Button text="Science" />
            <Button text="Industry" />
          </div>
        </div>
      </div>
      <div className="headerBottom">
        <div className="headerTopLeft">
          <div className="headerTopLeftSon">
            <Button text="News" />
            <Button text="Science" />
            <Button text="Industry" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
