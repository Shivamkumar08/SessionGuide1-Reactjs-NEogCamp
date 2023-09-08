// Challenge for Students:

// Write a React component to display all the properties of product object on the DOM.

export const Example6 = ({ product }) => {
  return (
    <>
      <h1>{product.name}</h1>
      <h2>Price: INR {product.price}</h2>
      <h2>Specification:{product.specification}</h2>
      <h2>Warranty:{product.warranty}</h2>
    </>
  );
};
