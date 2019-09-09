import React from "react";
import PlayersData from "./components/playersData";
import useDarkMode from "./components/customhooks/useDarkMode";
import Toggle from "./components/Toggle";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toggle />
        <PlayersData />
      </header>
    </div>
  );
}

export default App;
