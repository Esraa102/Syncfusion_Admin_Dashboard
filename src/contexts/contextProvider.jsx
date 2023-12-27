import { createContext, useContext, useState } from "react";

const stateContext = createContext();

const initalState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
  const [activeMenue, setActiveMenue] = useState(true);
  const [isClicked, setIsClicked] = useState(initalState);
  const handleClick = (clicked) => {
    setIsClicked({ ...initalState, [clicked]: true });
  };

  const handleClose = (clicked) => {
    setIsClicked({ ...initalState, [clicked]: false });
  };
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentMode, setCurrentMode] = useState("Light");
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [themeSettings, setThemeSettings] = useState(false);
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };
  return (
    <stateContext.Provider
      value={{
        activeMenue,
        setActiveMenue,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
        handleClose,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => useContext(stateContext);
