// Display the fruits in red colour, for which the price is less than INR 50.

export const Example8 = ({ fruits }) => {
  return (
    <>
      <ol>
        {fruits.map(({ id, name, price }) => {
          return (
            <li key={id} style={{ color: price < 50 ? "red" : "black" }}>
              {name} : INR {price}
            </li>
          );
        })}
      </ol>
    </>
  );
};
