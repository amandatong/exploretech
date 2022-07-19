import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useMediaPredicate } from "react-media-hook";
import cookieCutter from 'cookie-cutter';
import CookiesUtils from '../utils/cookies'
import { useDarkMode } from 'next-dark-mode'

const ThemeContext = createContext({
    darkMode: false,
    setDarkMode: () => {}
})

export default ThemeContext;

export function ThemeWrapper({children}){
    // const [darkMode, setDarkMode] = useState(useMediaPredicate("(prefers-color-scheme: dark)") ? true : false);
    const {
        autoModeActive,    // boolean - whether the auto mode is active or not
        autoModeSupported, // boolean - whether the auto mode is supported on this browser
        darkModeActive,    // boolean - whether the dark mode is active or not
        switchToAutoMode,  // function - toggles the auto mode on
        switchToDarkMode,  // function - toggles the dark mode on
        switchToLightMode, // function - toggles the light mode on
      } = useDarkMode()
    
    const [darkMode, setDarkMode] = useState(darkModeActive);

    return (
        <ThemeContext.Provider value={{darkMode, setDarkMode}}>
          {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    return useContext(ThemeContext);
}