// Write a React component to list out all fruits name and their price from the fruits array in the format {name} : INR {price}.

export const Example7 = ({ fruits }) => {
  return (
    <>
      <ol>
        {fruits.map(({ id, name, price }) => {
          return (
            <li key={id}>
              {name} : INR {price}
            </li>
          );
        })}
      </ol>
    </>
  );
};
