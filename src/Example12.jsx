// Write a React component to list out all fruits name and their price from the fruits array in the format {name} : INR {price}. On click of a button ‘Highlight Budget Fruits’, display the fruits in red colour, for which the price is less than INR 50.

import { useState } from "react";

export const Example12 = ({ fruits }) => {
  const [isHighLight, setIsHighLight] = useState(false);
  const showHighlightFruitsHandler = () => {
    setIsHighLight((isHighLight) => !isHighLight);
  };
  return (
    <>
      <ol>
        {fruits.map(({ id, name, price }) => {
          return (
            <li
              key={id}
              style={{ color: price < 50 && isHighLight ? "red" : "black" }}
            >
              {name} : INR {price}
            </li>
          );
        })}
      </ol>
      <button onClick={showHighlightFruitsHandler}>
        Highlight Budget Fruit
      </button>
    </>
  );
};
