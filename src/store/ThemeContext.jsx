import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { useTheme };
export default ThemeProvider;