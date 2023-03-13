import Photo from "../assets/photo.jpeg";
import "../css/author.css";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import { Arrow } from "../assets/Group422";
import { Arrow2 } from "../assets/Group4222";
import { PageChange } from "../component/pagechange";

function Author() {
  const [user1, setUser1] = useState("");

  // const fetchURL = async () => {
  //   await axios
  //     .get(
  //       `https://newsapi.org/v2/everything?q=tesla&from=2023-01-15&sortBy=publishedAt&apiKey=0797636a0e394ec29e4e053def1e1981`
  //     )
  //     .then((response) => setdata(response.data.articles));
  // };
  // console.log(data);
  // useEffect(() => {
  //   fetchURL();
  // });
  useEffect(() => {
    setUser1(localStorage.getItem("username"));
  }, []);

  return (
    <div className="suh_container">
      <Header />
      <div className="suh_body">
        {/* ehnii heseg */}
        <div className="suh_header">
          <img src={Photo} alt="" className="suh_prof" />
          <div className="suh_name">{user1}</div>
          <div className="suh_font">
            Daily international newspaper based in london
          </div>
        </div>
        {/* hoyrdoh heseg recent post */}
        <div className="suh_header2">
          <div className="suh_include">
            <div className="suh_font1">Recent Post</div>
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
              >
                <img
                  src={<Arrow />}
                  alt=""
                  style={{ rotate: "180deg", width: "2.5vw", height: "2.5vw" }}
                />
              </Button>
              <Button className="suh_but">1</Button>
              <Button
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <img
                  src={<Arrow2 />}
                  style={{
                    width: "2.5vw",
                    height: "2.5vw",
                    marginLeft: "-0.5vw",
                  }}
                  alt=""
                />
              </Button> */}
            </div>
          </div>

          <div className="suh_card_x">
            {/* {data?.map((el) => {
              return (
                <div key={el.id}>
                  <div className="suh_card">
                    <img className="news-pic" src={el?.urlToImage} alt="" />
                    <div className="description">{el?.description}</div>
                  </div>
                </div>
              );
            })} */}
            <div className="suh_card">
              <div className="pos">
                <img className="news-pic" src={Photo} alt="" />
                <div className="suh_type">border</div>
              </div>
              <div className="description">
                <div className="desk1">
                  Charge Two Devices at the Same Time With This Magnetic
                  Wireless Charging Dock
                  <div className="suh_name_date">
                    <div>Floyd Miles</div>
                    <div>3 Days Ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="suh_card">
              <div className="pos">
                <img className="news-pic" src={Photo} alt="" />
                <div className="suh_type">border</div>
              </div>
              <div className="description">
                <div className="desk1">
                  Charge Two Devices at the Same Time With This Magnetic
                  Wireless Charging Dock
                  <div className="suh_name_date">
                    <div>Floyd Miles</div>
                    <div>3 Days Ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="suh_card">
              <div className="pos">
                <img className="news-pic" src={Photo} alt="" />
                <div className="suh_type">border</div>
              </div>
              <div className="description">
                <div className="desk1">
                  Charge Two Devices at the Same Time With This Magnetic
                  Wireless Charging Dock
                  <div className="suh_name_date">
                    <div>Floyd Miles</div>
                    <div>3 Days Ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="suh_card">
              <div className="pos">
                <img className="news-pic" src={Photo} alt="" />
                <div className="suh_type">border</div>
              </div>
              <div className="description">
                <div className="desk1">
                  Charge Two Devices at the Same Time With This Magnetic
                  Wireless Charging Dock
                  <div className="suh_name_date">
                    <div>Floyd Miles</div>
                    <div>3 Days Ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="suh_card">
              <div className="pos">
                <img className="news-pic" src={Photo} alt="" />
                <div className="suh_type">border</div>
              </div>
              <div className="description">
                <div className="desk1">
                  Charge Two Devices at the Same Time With This Magnetic
                  Wireless Charging Dock
                  <div className="suh_name_date">
                    <div>Floyd Miles</div>
                    <div>3 Days Ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* guravdah heseg latest posts */}

        <div className="suh_header3">
          <div className="suh_header3_font"> Our Lateset Post</div>
          <div className="suh_card_wrap">
            <div className="suh_card2">
              <div className="pos">
                <img className="latest-pic" src={Photo} alt="" />
                <div className="suh_type">border</div>
              </div>
              <div className="description1">
                <div className="desk">
                  Charge Two Devices at the Same Time With This Magnetic
                  Wireless Charging Dock
                  <div className="suh_name_date">
                    <div>Floyd Miles</div>
                    <div>3 Days Ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="suh_card2">
              <div className="pos">
                <img className="latest-pic" src={Photo} alt="" />
                <div className="suh_type">border</div>
              </div>
              <div className="description1">
                <div className="desk">
                  Charge Two Devices at the Same Time With This Magnetic
                  Wireless Charging Dock
                  <div className="suh_name_date">
                    <div>Floyd Miles</div>
                    <div>3 Days Ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="suh_card2">
              <div className="pos">
                <img className="latest-pic" src={Photo} alt="" />
                <div className="suh_type">border</div>
              </div>
              <div className="description1">
                <div className="desk">
                  Charge Two Devices at the Same Time With This Magnetic
                  Wireless Charging Dock
                  <div className="suh_name_date">
                    <div>Floyd Miles</div>
                    <div>3 Days Ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="suh_card2">
              <div className="pos">
                <img className="latest-pic" src={Photo} alt="" />
                <div className="suh_type">border</div>
              </div>
              <div className="description1">
                <div className="desk">
                  Charge Two Devices at the Same Time With This Magnetic
                  Wireless Charging Dock
                  <div className="suh_name_date">
                    <div>Floyd Miles</div>
                    <div>3 Days Ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="suh_card2">
              <div className="pos">
                <img className="latest-pic" src={Photo} alt="" />
                <div className="suh_type">border</div>
              </div>
              <div className="description1">
                <div className="desk">
                  Charge Two Devices at the Same Time With This Magnetic
                  Wireless Charging Dock
                  <div className="suh_name_date">
                    <div>Floyd Miles</div>
                    <div>3 Days Ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="suh_card2">
              <div className="pos">
                <img className="latest-pic" src={Photo} alt="" />
                <div className="suh_type">border</div>
              </div>
              <div className="description1">
                <div className="desk">
                  Charge Two Devices at the Same Time With This Magnetic
                  Wireless Charging Dock
                  <div className="suh_name_date">
                    <div>Floyd Miles</div>
                    <div>3 Days Ago</div>
                  </div>
                </div>
                {/* <div className="suh_name_date">
                  <div>Floyd Miles</div>
                  <div>3 Days Ago</div>
                </div> */}
              </div>
            </div>
            <div className="suh_card2">
              <div className="pos">
                <img className="latest-pic" src={Photo} alt="" />
                <div className="suh_type">border</div>
              </div>
              <div className="description1">
                <div className="desk">
                  Charge Two Devices at the Same Time With This Magnetic
                  Wireless Charging Dock
                  <div className="suh_name_date">
                    <div>Floyd Miles</div>
                    <div>3 Days Ago</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="suh_card2">
              <div className="pos">
                <img className="latest-pic" src={Photo} alt="" />
                <div className="suh_type">border</div>
              </div>
              <div className="description1">
                <div className="desk">
                  Charge Two Devices at the Same Time With This Magnetic
                  Wireless Charging Dock
                  <div className="suh_name_date">
                    <div>Floyd Miles</div>
                    <div>3 Days Ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "10vh",
          }}
        >
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
            >
              <img
                src="Group422.svg"
                alt=""
                style={{ rotate: "180deg", width: "2.5vw", height: "2.5vw" }}
              />
            </Button>
            <Button className="suh_but">1</Button>
            <Button
              style={{
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <img
                src="Group422.svg"
                style={{
                  width: "2.5vw",
                  height: "2.5vw",
                  marginLeft: "-0.5vw",
                }}
                alt=""
              />
            </Button> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Author;
