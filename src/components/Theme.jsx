import React, { useContext } from "react";
import ThemeContext, { useTheme } from "../store/ThemeContext";

export default function Theme() {
  const { toggleTheme, isDarkMode } = useTheme();
  return (
    <div>
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme}/>
        Dark Mode
      </label>
    </div>
  );
}

// 
