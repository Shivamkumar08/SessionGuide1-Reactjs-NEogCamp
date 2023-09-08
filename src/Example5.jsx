// Write a React component to display two numbers and the sum of those two numbers.
// Calculate the sum dynamically.

// Take the numbers as props

export const Example5 = ({ firstNumber, secondNumber }) => {
  return (
    <>
      <h1>Sum of Numbers</h1>
      <h2>First Number:{firstNumber}</h2>
      <h2>Second Number:{secondNumber}</h2>
      <h2>Sum:{firstNumber + secondNumber}</h2>
    </>
  );
};
