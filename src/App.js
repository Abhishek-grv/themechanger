import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import { ThemeContext, themes } from "./context/themeContext";

function App() {
  const [theme, setTheme] = useState(themes.light);

  // btn
  function handleOnClick() {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  useEffect(() => {
    const body = document.body;
    switch (theme) {
      case themes.light:
        body.classList.remove("bg-dark", "text-light");
        body.classList.add("bg-light", "text-dark");
        break;
      case themes.dark:
        body.classList.remove("bg-light", "text-dark");
        body.classList.add("bg-dark", "text-light");
        break;
      default:
        body.classList.remove("bg-dark", "text-light");
        body.classList.add("bg-light", "text-dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleOnClick }}>
      <div className="main-container">
        <h1 className="text-center">Light Dark Theme App</h1>
        <Posts theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
