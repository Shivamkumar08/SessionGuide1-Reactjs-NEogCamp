// Write a Counter Component which has two buttons + and - and an initial count of 0 on the screen. Both the buttons will increase/decrease the count by 1 respectively. Display the increasing/decreasing count on click of the buttons.

import { useState } from "react";

export const Example11 = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((count) => count + 1);
  };
  const decrementCount = () => {
    setCount((count) => count - 1);
  };
  return (
    <>
      <button style={{ margin: "5px" }} onClick={incrementCount}>
        +
      </button>
      <span style={{ margin: "10px" }}>{count}</span>
      <button style={{ margin: "10px" }} onClick={decrementCount}>
        -
      </button>
    </>
  );
};
