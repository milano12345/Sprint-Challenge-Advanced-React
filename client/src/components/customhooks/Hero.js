import React from "react"
import useDarkMode from "use-dark-mode"


const Hero = () => {
  // Instantiate with the default behavior, in this case, it defaults to light-mode
 // This places "light-mode" class on document.body, as outlined in my gatsby-config.js
  const darkMode = useDarkMode(false);

  const handleTheme = () => {
        const body = document.querySelector('body')
        body.classList.add('dark-mode')
        body.classList.remove('light-mode')

  }
  

  return (
    <div className="hero">
    <button onClick={handleTheme}>Change Theme</button>
    </div>
  )
}

export default Hero;