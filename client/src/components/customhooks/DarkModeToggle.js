import React from 'react';
import useDarkMode from 'use-dark-mode';
import Toggle from './Toggle';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  // function changeWord() {
  //   const body = document.querySelector('body')
  //   if(body.classList === 'dark-mode') {
  //     return 'Light'
  //   } else {
  //     return 'Dark'
  //   }
  // }

  return (
    <div className='toggle'>
      <h1>Click here to go to the other Side.</h1>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;