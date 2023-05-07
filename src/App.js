import Home from "./pages/home/Home";
import { createContext, useState } from "react";

const themes = {
  light: {
    background: "#fff",
    color: "#222",
  },
  dark: {
    background: "#222",
    color: "#fff",
  },
};

export const ThemeContext = createContext(themes.light);

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () =>
    setTheme((prev) => (prev === themes.light ? themes.dark : themes.light));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
