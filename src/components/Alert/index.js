import React from "react";
import { useDispatch } from "react-redux";
import { pressButton } from "../../store/slices/alert";

import "./style.css";

const Alert = () => {
  const dispatch = useDispatch();
  console.log(pressButton);

  const handleAlert = () => {
    dispatch(pressButton({ text: "Hello World!" }));
  };
  return (
    <div className='btn-wrapper'>
      <button onClick={handleAlert}>Click Me</button>
    </div>
  );
};

export default Alert;
