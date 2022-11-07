
import './App.css';
import useLocalStorage from 'use-local-storage'
import { useEffect } from 'react';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const switchTheme = ()=>{
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)

    if (theme === 'light'){
      document.getElementById("darkbulb")?.classList.remove("sumir")
      document.getElementById("darkglow")?.classList.remove("sumir")
    } else{
      document.getElementById("lightbulb")?.classList.remove("sumir")
      document.getElementById("lightglow")?.classList.remove("sumir")
    }
  }

  useEffect(()=>{
    if (theme === 'light'){
      document.getElementById("darkbulb")?.classList.add("sumir")
      document.getElementById("darkglow")?.classList.add("sumir")
    } else{
      document.getElementById("lightbulb")?.classList.add("sumir")
      document.getElementById("lightglow")?.classList.add("sumir")
    }
  },[theme])

  return (
   <body data-theme = {theme}>
      <h1>I am a string</h1>

          <div id='lightglow'></div>
          <div id='darkglow'></div>
          <img id='lightbulb' onClick={switchTheme} src="/images/light-bulb.png" alt="" />
          <img id='darkbulb' onClick={switchTheme} src="/images/dark-bulb.png" alt="" />
      
   </body>
  );
}

export default App;
