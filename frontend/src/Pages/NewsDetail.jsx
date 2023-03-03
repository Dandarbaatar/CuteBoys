import "../css/news.css";
import Header from "../component/header";
import UserPhoto from "../assets/photo.jpeg";
import { LikeCommentShare } from "../component/likeCommentShare";
import Love from "../assets/love.svg";
import Comment from "../assets/comment.svg";
import Share from "../assets/share.svg";

export const News = () => {
  return (
    <div className="newsDad">
      <Header headerClass="headerBgNone" />
      <div className="news">
        <div className="heroDiv">
          <div className="heroInfo">Innovation 2 Hours ago</div>
          <div className="heroHeader">
            Charge Two Devices at the Same Time With This Magnetic Wireless
            Charging Dock
          </div>
          <div className="heroUser">
            <img src={UserPhoto} className="userProfile" alt="" />
            Cameron Willamson
          </div>
          <div className="heroLikeCommentShare"></div>
          <div className="likeCommentShare">
            <LikeCommentShare img={Love} number="521K" />
            <LikeCommentShare img={Comment} number="213" />
            <LikeCommentShare img={Share} number="69" />
          </div>
        </div>
      </div>
    </div>
  );
};
