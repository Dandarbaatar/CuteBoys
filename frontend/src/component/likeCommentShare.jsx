import "../App.css";

export const LikeCommentShare = (props) => {
  return (
    <div className="likeCommentShareDad">
      <img src={props.img} alt="" />
      <div className="likeCommentShareNumber">{props.number}</div>
    </div>
  );
};
