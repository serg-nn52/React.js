import React from "react";
import "./Btn.scss";

// type BtnType = {
//   btnName: string;
// };

const Btn = (props: any) => {
  const { btnName, onClick, style } = props;
  return (
    <button type="submit" className="btn" onClick={onClick} style={style}>
      {btnName}
    </button>
  );
};

export default Btn;
