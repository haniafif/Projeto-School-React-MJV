
import './App.css';
import useLocalStorage from 'use-local-storage'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  
  const switchTheme = ()=>{
    const newTheme = theme === 'light' ? 'dark' : 'light'
    console.log(newTheme)
    setTheme(newTheme)
  }

  return (
   <main data-theme = {theme}>
      <h1>I am a string</h1>
      <button id='themeToggler' onClick={switchTheme}> Switch Theme </button>
   </main>
  );
}

export default App;
