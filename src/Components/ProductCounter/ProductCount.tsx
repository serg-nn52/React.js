import React from "react";

type ProductCountType = {
  count: number;
};

const ProductCount: React.FC<ProductCountType> = (props) => {
  const { count } = props;
  return <span>{count}</span>;
};

export default ProductCount;
