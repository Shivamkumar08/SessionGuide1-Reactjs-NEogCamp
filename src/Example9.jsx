// Given an employee data. List out the employee details and add a border to the employee details who have more than 5 years of experience.

export const Example9 = ({ employees }) => {
  return (
    <>
      <h1>Employee List</h1>
      {employees.map(({ id, name, workExperience }) => {
        return (
          <li
            style={{
              padding: "5px",
              margin: "5px",
              border: workExperience > 5 ? "2px solid orange" : "none"
            }}
          >
            {name}: {workExperience} years
          </li>
        );
      })}
    </>
  );
};
