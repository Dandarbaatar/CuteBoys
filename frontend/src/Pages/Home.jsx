import "../css/home.css";
import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { HomeCard1, Homecard2 } from "../component/homeCard";
export const Home = () => {
  const homeCard = [1, 2, 3, 4];
  return (
    <div className="Homebig">
      <div className="Homepage1">
        <div className="headerHome">
          <Header headerClass="headerBgNone" />
        </div>
        <div className="HomePage1Content">
          <div className="'HomePage1Left">
            <div className="HomePage1Up">
              <div className="Homepage1Text1">
                <div className="Homepage1Text">Innovation</div>
                <div className="Homepage1Text">2 Hours ago</div>
              </div>
              <h1 className="Homepage1Text2">
                Charge Two Devices at the Same Time With This Magnetic Wireless
                Charging Dock
              </h1>
            </div>
            <div className="HomePage1Cards">
              <div className="HomePage1Card">
                <div className="HomePage1CardImg"></div>
                <div className="HomePage1CardText">
                  Charge Two Devices at the Same Time With This Magnetic
                  Wireless Charging Dock
                </div>
              </div>
              <div className="HomePage1Card">
                <div className="HomePage1CardImg"></div>
                <div className="HomePage1CardText">
                  Tiny moon rover could be a stepping stone to Mars
                </div>
              </div>
            </div>
          </div>
          <div className="HomePage1Right">
            <div className="HomePage1RightText1">Popular this week</div>
            <div className="HomePage1RightText2">
              <div className="HomePage1RightText2Card">
                <div className="HomePage1RightText2CardImg"></div>
                <div className="HomePage1RightText2CardTexts">
                  <div className="Homepage1Text11">
                    <div className="HomePage1RightText2CardText">
                      Innovation
                    </div>
                    <div className="HomePage1RightText2CardText">
                      2 Hours ago
                    </div>
                  </div>
                  <div className="HomePage1RightText2CardText1">
                    7 Ways You Can Reduce Climate Change
                  </div>
                </div>
              </div>
              <div className="HomePage1RightText2Card">
                <div className="HomePage1RightText2CardImg"></div>
                <div className="HomePage1RightText2CardTexts">
                  <div className="Homepage1Text11">
                    <div className="HomePage1RightText2CardText">
                      Innovation
                    </div>
                    <div className="HomePage1RightText2CardText">
                      2 Hours ago
                    </div>
                  </div>
                  <div className="HomePage1RightText2CardText1">
                    7 Ways You Can Reduce Climate Change
                  </div>
                </div>
              </div>
              <div className="HomePage1RightText2Card">
                <div className="HomePage1RightText2CardImg"></div>
                <div className="HomePage1RightText2CardTexts">
                  <div className="Homepage1Text11">
                    <div className="HomePage1RightText2CardText">
                      Innovation
                    </div>
                    <div className="HomePage1RightText2CardText">
                      2 Hours ago
                    </div>
                  </div>
                  <div className="HomePage1RightText2CardText1">
                    7 Ways You Can Reduce Climate Change
                  </div>
                </div>
              </div>
              <div className="HomePage1RightText2Card">
                <div className="HomePage1RightText2CardImg"></div>
                <div className="HomePage1RightText2CardTexts">
                  <div className="Homepage1Text11">
                    <div className="HomePage1RightText2CardText">
                      Innovation
                    </div>
                    <div className="HomePage1RightText2CardText">
                      2 Hours ago
                    </div>
                  </div>
                  <div className="HomePage1RightText2CardText1">
                    7 Ways You Can Reduce Climate Change
                  </div>
                </div>
              </div>{" "}
              <div className="HomePage1RightText2Card">
                <div className="HomePage1RightText2CardImg"></div>
                <div className="HomePage1RightText2CardTexts">
                  <div className="Homepage1Text11">
                    <div className="HomePage1RightText2CardText">
                      Innovation
                    </div>
                    <div className="HomePage1RightText2CardText">
                      2 Hours ago
                    </div>
                  </div>
                  <div className="HomePage1RightText2CardText1">
                    7 Ways You Can Reduce Climate Change
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Homepage2">
        <div className="HomePage2Content">
          <div className="HomePage2ContentTop">
            <div className="homePage2Topic">Our Lateset Post</div>
            <button className="homePageBtn">View all</button>
          </div>
          <div className="HomePage2Cards1">
            {homeCard.map((e) => {
              return <HomeCard1 />;
            })}
          </div>
          <div className="HomePage2Cards1">
            {homeCard.map((e) => {
              return <HomeCard1 />;
            })}
          </div>
        </div>
      </div>
      <div className="HomePage3">
        <div className="HomePage3Contents">
          <div className="HomePage3Top">
            <div className="HomePage3TopLeft">Recommended For You</div>
          </div>
          <div className="HomePage3Text">
            {homeCard.map((e) => {
              return <Homecard2 />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
