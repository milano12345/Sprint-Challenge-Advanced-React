import React from "react";
import useDarkMode from "./customhooks/useDarkMode";

const Toggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return (
    <div className="toggle">
      <h1>Click here to go to the {darkMode ? "Dark" : "Light"} Side.</h1>
      <button type="button" onClick={toggleDarkMode}>
        {darkMode ? "☀" : "☾"}
      </button>
      {/* <button type="button" onClick={toggleDarkMode()}>
        ☾
      </button> */}
    </div>
  );
};

export default Toggle;
