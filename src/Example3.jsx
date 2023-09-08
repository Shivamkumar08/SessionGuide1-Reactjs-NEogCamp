// 1-Change the colour of heading ‘Sum of Numbers’ to green.
// 2-Change the fontSize of “First Number”, “Second Number” and “Sum” to 20px.

export const Example3 = () => {
  const fSize = "20px";
  return (
    <>
      <h1 style={{ color: "green" }}>Sum of Numbers</h1>
      <h2 style={{ fontSize: fSize }}>First Number:5</h2>
      <h2 style={{ fontSize: fSize }}>Second Number:4</h2>
      <h2 style={{ fontSize: fSize }}>Sum:9</h2>
    </>
  );
};
