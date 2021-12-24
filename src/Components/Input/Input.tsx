import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("start");
  const [valueClick, setvalueClick] = useState("1");
  const [typeInput, setTypeInput] = useState("password");
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setValue(e.target.value);
  };
  const inp: any = document.querySelector("input");
  const passwordHandler = () => {
    // console.log(typeInput);
    setTypeInput((prev) => (prev === "password" ? "text" : "password"));
    setvalueClick(inp?.value);
  };
  console.log(valueClick);

  //   console.log(inp?.value, valueClick);
  return (
    <div>
      <span style={{ marginRight: "10px" }}>{`VALUE= ${value}`}</span>
      <input
        onInput={changeHandler}
        style={{ fontSize: "24px", marginBottom: "20px" }}
        type={typeInput}
      />
      <button onClick={passwordHandler} type="button">
        <i className="fas fa-eye-slash" />
      </button>
    </div>
  );
};

export default Input;
