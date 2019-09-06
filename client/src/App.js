import React from 'react';
import useDarkMode from 'use-dark-mode'
import PlayersData from './components/playersData';
import Hero from './components/customhooks/Hero'
import './App.scss';

function App() {

  return (
    <div className='App'>
      <header className="App-header">
        <Hero />
        <PlayersData />
      </header>
    </div>
  );
}

export default App;
