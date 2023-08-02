import { createContext, useContext, useState } from "react";
import { useEffect } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "Dark");
  const values = { theme, setTheme}

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={ values }>
        {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  return context
}