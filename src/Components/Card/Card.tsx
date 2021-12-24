import React from "react";
// import image from "../img/card__img.jpg";
import Btn from "../Btn/Btn";
import Stars from "../Stars/Stars";
import "./Card.scss";

type CardType = {
  prodDescr: {
    image?: string;
    descr: string;
    price?: number;
  };
};

const Card = (props: CardType) => {
  const {
    prodDescr: { image = "./img/no_product.jpg", descr, price = 100 },
  } = props;
  return (
    <div className="card">
      <div className="card__img" style={{ backgroundImage: `url(${image})` }}>
        <Btn btnName="Быстрый просмотр" />
        <Btn btnName="В корзину" />
      </div>
      <Stars />
      <p className="descr">{descr}</p>
      <p className="price">
        <i className="fas fa-ruble-sign" /> {price}
      </p>
    </div>
  );
};

export default Card;
