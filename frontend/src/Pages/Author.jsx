import Photo from "../assets/photo.jpeg";
import "../css/author.css";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";

function Author() {
  // const [data, setdata] = useState([]);

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

  return (
    <div className="suh_container">
      <Header />
      <div className="suh_body">
        {/* ehnii heseg */}
        <div className="suh_header">
          <img src={Photo} alt="" className="suh_prof" />
          <div className="suh_name">Guy Hawkins</div>
          <div className="suh_font">
            Daily international newspaper based in london
          </div>
        </div>
        {/* hoyrdoh heseg recent post */}
        <div className="suh_header2">
          <div className="suh_font1">Recent Post</div>
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
        <Footer />
      </div>
    </div>
  );
}

export default Author;
