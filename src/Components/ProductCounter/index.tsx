import React, { useState } from "react";
import ProductCount from "./ProductCount";

type ProductCounterPropsType = {
  product: {
    productName: string;
    count?: number;
  };
};
const ProductCounter: React.FC<ProductCounterPropsType> = (props) => {
  const {
    product: { productName },
  } = props;

  const [count, setCount] = useState<number>(1);
  const addHandler = () => {
    setCount((prev) => prev + 1);
  };
  const deleteHandler = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>{productName}</h1>
      <ProductCount count={count} />
      <button onClick={addHandler} type="button">
        Добавить
      </button>
      <button onClick={deleteHandler} type="button">
        Убавить
      </button>
    </div>
  );
};

export default ProductCounter;
