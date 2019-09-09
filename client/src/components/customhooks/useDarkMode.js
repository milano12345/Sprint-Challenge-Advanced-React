import { useLocalStorage } from "./useLocalStorage";
import React, { useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode");
  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode === true) {
      body.classList.add("light-mode");
      body.classList.remove("dark-mode");
    } else if (darkMode === false) {
      body.classList.add("dark-mode");
      body.classList.remove("light-mode");
    }
  }, [darkMode]);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
