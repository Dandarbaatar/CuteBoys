import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { News } from "../component/news";
import { useEffect, useState } from "react";
import { Changepage } from "../component/changepage";
import { PageChange } from "../component/pagechange";
import Header from "../component/header";
import Footer from "../component/footer";
import searchButton from "../assets/search.svg";

export const Search = () => {
  const [inputs, setInputs] = useState("");
  const [news, setNews] = useState([]);
  const [but, setBut] = useState([]);
  const [clicked, setClicked] = useState(1);
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
    { is: "temp" },
    { is: "pmet" },
  ];
  useEffect(() => {
    setNews(temp);
  }, []);
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
  const Input = (e) => {
    setInputs(e.target.value);
  };
  return (
    <div>
      <Header />
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
              height: "5.5vh",
              width: "6vh",
              marginLeft: "5vw",
              borderRadius: "8px",
            }}
          >
            <img
              style={{ width: "80%", height: "80%" }}
              src={searchButton}
              alt=""
            />
          </Button>
        </div>
      </Navbar>
      <div
        style={{
          width: "80%",
          marginLeft: "10vw",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <div style={{ fontWeight: "700", fontSize: "2vw", marginBottom: "1%" }}>
          News
        </div>
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
          <PageChange />
          {/* <Button
            style={{
              backgroundColor: "transparent",
              color: "#E0E0E0",
              border: "none",
            }}
            onClick={ChangeBack}
          >
            <img
              src="Group422.svg"
              alt=""
              style={{ rotate: "180deg", width: "2.5vw", height: "2.5vw" }}
            />
          </Button>
          {but?.map((el) => {
            return (
              <Changepage el={el} clicked={clicked} setClicked={setClicked} />
            );
          })}
          <Button
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
            onClick={ChangeForward}
          >
            <img
              src="Group422.svg"
              style={{ width: "2.5vw", height: "2.5vw", marginLeft: "-0.5vw" }}
              alt=""
            />
          </Button> */}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};
