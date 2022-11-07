
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
      document.getElementById("darkpumpkin")?.classList.remove("sumir")
    } else{
      document.getElementById("lightbulb")?.classList.remove("sumir")
      document.getElementById("lightglow")?.classList.remove("sumir")
      document.getElementById("lighpumpkin")?.classList.remove("sumir")
    }
  }

  useEffect(()=>{
    if (theme === 'light'){
      document.getElementById("darkbulb")?.classList.add("sumir")
      document.getElementById("darkglow")?.classList.add("sumir")
      document.getElementById("darkpumpkin")?.classList.add("sumir")
    } else{
      document.getElementById("lightbulb")?.classList.add("sumir")
      document.getElementById("lightglow")?.classList.add("sumir")
      document.getElementById("lighpumpkin")?.classList.add("sumir")
    }
  },[theme])

  return (
   <body data-theme = {theme}>
      <header>

        <nav>

        </nav>
        
      </header>

      <main>

      </main>


      <footer>

      </footer>


      <aside id='themeschema'>
        <div id='lightglow'></div>
        <div id='darkglow'></div>

        <img id='lightbulb' onClick={switchTheme} src="/images/light-bulb.png" alt="lantern turn on" />
        <img id='darkbulb' onClick={switchTheme} src="/images/dark-bulb.png" alt="lantern turn off" />

        <img id='lighpumpkin' src="/images/light-pumpkin.png" alt="cute pumpkin" />
        <img id='darkpumpkin' src="/images/dark-pumpkin.png" alt="dark pumpkin" />
      </aside>
        
   </body>
  );
}

export default App;
