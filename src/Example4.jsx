// In EmployeeCard,
// change the color of “Designation:” to red.
// change the color of “Experience:” to blue.
// make the font size of “10 years” to 18px
// hint: use span tag to change colors in middle of a paragraph

export const Example4 = () => {
  return (
    <>
      <h1>Tanay Pratap</h1>
      <h2>
        <span style={{ color: "red" }}>Designation</span>:Senior Software
        Engineer
      </h2>
      <h2>
        <span style={{ color: "blue" }}>Experience</span>:
        <span style={{ fontSize: "18px" }}>10years</span>
      </h2>
    </>
  );
};
