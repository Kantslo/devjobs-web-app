import { useState, useEffect } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom"
import IconSun from "./components/IconSun"
import IconMoon from "./components/IconMoon"
import HeaderText from "./components/HeaderText";
import { Jobs } from "./Jobs";
import Job from "./Job";

function App() {

  
  
  ///////// THEME SWITCHER /////////

  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || 'system'
  );

  const [systemTheme, setSystemTheme] = useState<string>(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  const setDarkModeClass = (isDarkMode: boolean) => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  };

  useEffect(() => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(darkQuery)
      
    const handleDarkModeChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
      setTheme(e.matches ? 'dark' : 'light'); // Add this line to update the theme state
    };
  
    darkQuery.addEventListener('change', handleDarkModeChange);
  
    return () => {
      darkQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    const effectiveTheme = theme === 'system' ? systemTheme : theme;

    switch (effectiveTheme) {
      case 'dark':
        setDarkModeClass(true);
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        setDarkModeClass(false);
        localStorage.setItem('theme', 'light');
        break;
      default:
        break;
    }
  }, [theme, systemTheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'dark') {
        return 'light';
      } else if (prevTheme === 'light') {
        return 'dark';
      } else {
        return 'system';
      }
    });
  };

  

   const { company } = useParams();
   console.log(company)

  return (
    <>
      <div id="background" className={`bg-[#F4F6F8] dark:bg-[#121721] z-10 font-kumbh min-h-screen`}>
        <header className="h-[136px] px-6">
          <div className="flex justify-between pt-8">
            <Link to={"/"}>
              <h1>{<HeaderText/>}</h1>
            </Link>
            <div className="flex items-center gap-4 justify-evenly">
              <IconSun/>
              <button className="outline-none" onClick={() => {toggleTheme()}}>
                <span className="flex items-center w-12 h-6 p-1 bg-white rounded-2xl">
                  <span className={`block w-[14px] h-[14px] rounded-full bg-[#5964E0] transition-transform transform 
                  ${theme === 'dark' || (theme === 'system' && systemTheme === 'dark') ? 'translate-x-[26px]' : ''}`}></span>
                </span>
              </button>
              <IconMoon/>
            </div>
          </div>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Jobs />} />
            <Route path="/job/:company" element={<Job/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App

