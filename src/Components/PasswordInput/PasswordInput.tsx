import React, { useState } from "react";
import "./PasswordInput.scss";

const PasswordInput = (props: any) => {
  const { label, setValue } = props;
  //   console.log(props);
  const [password, setPassword] = useState("password");
  //   const [value, setUserInfo] = useState("");

  // меняю тип инпута
  const changePasswordType = () => {
    // eslint-disable-next-line
    setPassword((prev) => (prev === "password" ? "text" : "password"));
  };

  // изменяется значение поля
  const passwordValue = (e: any) => {
    setValue(e.target.value);
  };
  //   console.log(value);

  return (
    <div>
      <p className="label">{label}</p>
      <input
        onChange={passwordValue}
        className="form__password"
        type={password}
        placeholder={label}
      />
      <button
        onClick={changePasswordType}
        type="button"
        className="password-btn">
        <i className="fas fa-eye-slash" />
      </button>
    </div>
  );
};

export default PasswordInput;
