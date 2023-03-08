import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import { Changepage } from "./changepage";
import { Arrow } from "../assets/Group422.js";
import { Arrow2 } from "../assets/Group4222";

export const PageChange = () => {
  const [news, setNews] = useState([]);
  const [but, setBut] = useState([]);
  const [fill, setFill] = useState("");
  const [clicked, setClicked] = useState(1);
  const [fill2, setFill2] = useState("");
  let a = 0;
  let b = 0;
  let c = [0];
  let temp = [
    { is: "asd" },
    { is: "dsa" },
    { is: "temp" },
    { is: "pmet" },
    { is: "asd" },
    { is: "dsa" },
  ];
  useEffect(() => {
    setNews(temp);
  }, []);
  useEffect(() => {
    if (clicked === 1) {
      setFill("#E0E0E0");
    } else {
      setFill("#F3692E");
    }
    if (clicked === but.length) {
      setFill2("#E0E0E0");
    } else {
      setFill2("#F3692E");
    }
  }, [clicked]);
  const Get = async () => {
    news.forEach((element) => {
      a++;
      if (a >= 3) {
        b++;
        a = 0;
        c.push(b);
        setBut(c);
      }
    });
  };
  const ChangeBack = () => {
    if (clicked > 1) {
      setClicked(clicked - 1);
    }
  };
  const ChangeForward = () => {
    if (clicked < but.length) {
      setClicked(clicked + 1);
    }
  };
  useEffect(() => {
    Get();
  }, [news]);
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Button
        style={{
          backgroundColor: "transparent",
          color: "#E0E0E0",
          border: "none",
        }}
        onClick={ChangeBack}
      >
        <div style={{ rotate: "180deg" }}>
          <Arrow fill={fill} />
        </div>
      </Button>
      {but?.map((el) => {
        return <Changepage el={el} clicked={clicked} setClicked={setClicked} />;
      })}
      <Button
        style={{
          backgroundColor: "transparent",
          border: "none",
        }}
        onClick={ChangeForward}
      >
        <Arrow2 fill2={fill2} />
      </Button>
    </div>
  );
};
