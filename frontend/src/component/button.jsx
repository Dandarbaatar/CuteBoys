import "../App.css";

export const Button = (props) => {
  return (
    <div className="buttonDad">
      <button className={props.class || "button"}>{props.text}</button>
    </div>
  );
};
