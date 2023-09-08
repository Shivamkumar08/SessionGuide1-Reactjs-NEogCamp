// Given an array of objects representing your cart containing some food items ordered online. Each object consists of: id, name and price. Write a React component that shows these items in an ordered list and in the end calculate and show the “total price” using reduce.

export const Example10 = ({ mycart }) => {
  return (
    <>
      <h1>My cart</h1>
      <ol>
        {mycart.map(({ id, name, price }) => {
          return (
            <li key={id} style={{ padding: "3px", margin: "1px" }}>
              {name}- INR {price}
            </li>
          );
        })}
      </ol>
      <p>
        Total Price:
        {mycart.reduce((acc, currVal) => {
          return acc + currVal.price;
        }, 0)}
      </p>
    </>
  );
};
