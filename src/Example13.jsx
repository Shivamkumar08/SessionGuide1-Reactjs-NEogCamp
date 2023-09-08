// Given an employee data. List out the employee details on DOM. Then upon click of a button “Highlight Employees”, add a border to the employee details who have more than 5 years of experience.

import { useState } from "react";

export const Example13 = ({ employees }) => {
  const [isHighLight, setIsHighLight] = useState(false);
  const showHighlight = () => {
    setIsHighLight((isHighLight) => !isHighLight);
  };
  return (
    <>
      {employees.map(({ id, name, workExperience }) => {
        return (
          <li
            style={{
              padding: "5px",
              margin: "5px",
              border:
                workExperience > 5 && isHighLight ? "2px solid orange" : "none"
            }}
          >
            {name}: {workExperience} years
          </li>
        );
      })}
      <button onClick={showHighlight}>Highlight Employees</button>
    </>
  );
};
