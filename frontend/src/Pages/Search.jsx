import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { News } from "../component/news";
import { useEffect, useState } from "react";
import { Changepage } from "../component/changepage";

export const Search = () => {
  const [inputs, setInputs] = useState("");
  const [news, setNews] = useState([]);
  const [but, setBut] = useState([]);
  let a = 0;
  let b = 0;
  let c = [0];
  let temp = [{ is: "asd" }, { is: "dsa" }, { is: "temp" }, { is: "pmet" }];
  useEffect(() => {
    setNews(temp);
  }, []);
  const Get = async () => {
    news.forEach((element) => {
      a++;
      console.log(a);
      if (a >= 3) {
        b++;
        a = 0;
        c.push(b);
        setBut(c);
      }
    });
  };
  useEffect(() => {
    Get();
  }, [news]);
  useEffect(() => {}, [but]);
  const Input = (e) => {
    setInputs(e.target.value);
  };
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#109BE9",
          height: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "80%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <input
            style={{
              width: "100%",
              height: "60%",
              borderRadius: "8px",
              border: "none",
              paddingLeft: "1%",
            }}
            placeholder="Search topic what you want to know"
            onChange={Input}
          ></input>
          <Button
            style={{
              backgroundColor: "#F36326",
              height: "60%",
              width: "5.5vh",
              marginLeft: "5vw",
              borderRadius: "8px",
            }}
          >
            <img
              style={{ width: "60%", height: "60%" }}
              src="button.png"
              alt=""
            />
          </Button>
        </div>
      </Navbar>
      <div style={{ width: "80%", marginLeft: "10vw" }}>
        <div style={{ fontWeight: "700", fontSize: "2vw" }}>News</div>
        {news?.map((el) => {
          return <News />;
        })}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button
            style={{
              backgroundColor: "transparent",
              color: "#E0E0E0",
              border: "none",
            }}
          >
            <img
              src="Group422.svg"
              alt=""
              style={{ rotate: "180deg", width: "2.5vw", height: "2.5vw" }}
            />
          </Button>
          {but?.map((el) => {
            return <Changepage />;
          })}
          <Button
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <img
              src="Group422.svg"
              style={{ width: "2.5vw", height: "2.5vw", marginLeft: "-0.5vw" }}
              alt=""
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
