import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";

export const Changepage = ({ color, setColor, el, one, setOne }) => {
  const [imp, setImp] = useState(false);
  const number = el + 1;
  useEffect(() => {
    if (number === 1) {
      setImp(true);
      setColor(false);
      setOne(true);
    }
  }, [number]);
  const Change = () => {
    if (number === 1) {
      setOne(true);
    }
    if (imp) {
      setOne(false);
      setImp(false);
      setColor(true);
    }
    if (color) {
      setOne(false);
      setImp(true);
      setColor(false);
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
          color: imp ? "white" : "black",
          height: "2vw",
          width: "2vw",
          backgroundColor: imp ? "#109BE9" : "transparent",
        }}
      >
        {number}
      </Button>
    </div>
  );
};
