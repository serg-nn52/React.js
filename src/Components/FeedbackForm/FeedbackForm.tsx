import React, { useState } from "react";
import PasswordInput from "../PasswordInput/PasswordInput";
import FeedbackInput from "../FeedBackInput/FeedBackInput";
import "./FeedbackForm.scss";
import Btn from "../Btn/Btn";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();
    // Проверяю корректность паролей
    if (value === value1 && value !== "" && value1 !== "") {
      // Выводим в консоль объект с интересующей нас информацией, которую отправил пользователь
      const userSendInfo = {
        userName: name,
        userSurname: surname,
        userTel: tel,
        userMail: mail,
        password: value,
        doublePassword: value1,
      };
      console.log(userSendInfo);
      alert("Данные успешно отправлены!");
    } else if (value === "" || value1 === "") {
      alert("Введите пароль, не заполнено поле ввода!");
    } else {
      alert("Введенные пароли не совпадают!");
    }
  };
  return (
    <>
      <h2>Оставьте свои контакты и мы свяжемся с Вами!</h2>
      <form action="#">
        <FeedbackInput
          label="Имя"
          className="form__data"
          type="text"
          placeholder="Иван"
          setValue={setName}
        />
        <FeedbackInput
          label="Фамилия"
          className="form__data"
          type="text"
          placeholder="Иванов"
          setValue={setSurname}
        />
        <FeedbackInput
          label="Телефон"
          className="form__data"
          type="tel"
          placeholder="+375293333333"
          setValue={setTel}
        />
        <FeedbackInput
          label="e-mail"
          className="form__data"
          type="email"
          placeholder="ivanov@yandex.by"
          setValue={setMail}
        />
        <PasswordInput
          label="Введите пароль"
          value={value}
          setValue={setValue}
        />
        <PasswordInput
          label="Повторите пароль"
          value={value1}
          setValue={setValue1}
        />
        <Btn
          onClick={submitHandler}
          btnName="Отправить данные"
          style={{
            backgroundColor: "#253cc3",
            width: "50%",
            position: "static",
            marginTop: "25px",
          }}
        />
        {/* <button onClick={submitHandler} type="submit">
          Отправить данные
        </button> */}
      </form>
    </>
  );
};
export default FeedbackForm;
