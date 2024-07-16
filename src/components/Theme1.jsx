import React, { useContext } from 'react'
import { useTheme } from '../store/ThemeContext'

export default function Theme1() {
  const {isDarkMode} = useTheme();
  const themeClass = isDarkMode ? 'dark-theme' : 'light-theme';
  return (
    <div className={`container ${themeClass}`}>
      <p>This content uses selected theme</p>
    </div>
  )
}

// 
