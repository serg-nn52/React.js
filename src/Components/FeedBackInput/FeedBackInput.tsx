import React from "react";

const FeedbackInput = (props: any) => {
  const { label, className, type, placeholder, setValue } = props;
  const inputHandler = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <div>
      <p>{label}</p>
      <input
        onChange={inputHandler}
        className={className}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
export default FeedbackInput;
