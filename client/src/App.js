import React from 'react';
import PlayersData from './components/playersData';
import DarkModeToggle from './components/customhooks/DarkModeToggle'
import './App.scss';

function App() {

  return (
    <div className='App'>
      <header className="App-header">
        <DarkModeToggle />
        <PlayersData />
      </header>
    </div>
  );
}

export default App;
