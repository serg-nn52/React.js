import React from "react";
import "./App.scss";
import "../Header/Header.scss";
// import "./index.css";
// import ProductCounter from "../ProductCounter";
// import { userInfo } from "../FeedbackForm";
import Card from "../Card/Card";
// import Btn from "./Components/Btn";
import { productList } from "../../data/product-data";
// import Form from "../Form/Form";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const App = () => {
  return (
    <div>
      {/* <div className="product_counter">
        <ProductCounter product={{ productName: "Яблоко", count: 10 }} />
        <ProductCounter product={{ productName: "Груша", count: 10 }} />
        <ProductCounter product={{ productName: "Киви", count: 35 }} />
      </div> */}
      <Header />
      <section className="content">
        <div className="cards container">
          <h1>Главная страница</h1>
          <Card prodDescr={productList[0]} />
          <Card prodDescr={productList[1]} />
          <Card prodDescr={productList[2]} />
          <Card prodDescr={productList[3]} />
        </div>
        <FeedbackForm />
        {/* <Form /> */}
      </section>
      <Footer />
    </div>
  );
};

export default App;
