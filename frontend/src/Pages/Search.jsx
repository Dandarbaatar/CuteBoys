import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { News } from "../component/news";
import { useEffect, useState } from "react";
import { PageChange } from "../component/pagechange";
import Header from "../component/header";
import Footer from "../component/footer";
import searchButton from "../assets/search.svg";

export const Search = () => {
  const [inputs, setInputs] = useState("");
  const [news, setNews] = useState([]);
  const [show, setShow] = useState([]);
  const [check, setCheck] = useState(false);
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
  const Input = (e) => {
    setInputs(e.target.value);
    temp.map((el) => {
      if (inputs == el.is.charAt(0)) {
        setShow(el);
      }
    });
    console.log(show);
  };
  const Searching = () => {
    setCheck(true);
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
            onClick={Searching}
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
        {check
          ? news?.map((el) => {
              return <News is={el.is} />;
            })
          : show.map((el) => {
              return <News is={el.is} />;
            })}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <PageChange />
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
