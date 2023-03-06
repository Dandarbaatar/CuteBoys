import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";

export const Changepage = ({ el, clicked, setClicked }) => {
  const [imp, setImp] = useState(false);
  const [color, setColor] = useState(false);
  const number = el + 1;
  useEffect(() => {
    if (clicked === number) {
      setImp(true);
      setColor(true);
    } else {
      setColor(false);
    }
  }, [clicked]);
  const Change = () => {
    setClicked(el + 1);
    if (imp) {
      setColor(true);
    }
  };
  return (
    <div>
      <Button
        onClick={Change}
        style={{
          display: "flex",
          alignItems: "center",
          border: "none",
          borderRadius: "0.5vh",
          justifyContent: "center",
          marginRight: "0.5vw",
          fontSize: "0.85vw",
          color: color ? "white" : "black",
          height: "2vw",
          width: "2vw",
          backgroundColor: color ? "#109BE9" : "transparent",
        }}
      >
        {el + 1}
      </Button>
    </div>
  );
};
