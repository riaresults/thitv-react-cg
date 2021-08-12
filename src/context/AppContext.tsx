import { useState } from "react";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { themes } from "../components/themes";
import { Theme, Storage } from "../@types/types";
import { setStorage, getStorage } from "../services/storage/storage";

interface IAppContext {
  currentTheme: Theme;
  changeTheme(theme: Theme): void;
}

interface IAppContextProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({
  currentTheme: Theme.LIGHT_MODE,
  changeTheme: () => {},
});

const storedTheme = getStorage(Storage.THEME);

export function AppContextProvider({ children }: IAppContextProvider) {
  const theme = storedTheme?.theme || Theme.LIGHT_MODE;
  const [currentTheme, setCurrentTheme] = useState<Theme>(theme);

  function changeTheme(theme: Theme) {
    setStorage({ theme: theme }, Storage.THEME, true);
    setCurrentTheme(theme);
  }

  return (
    <AppContext.Provider
      value={{
        currentTheme,
        changeTheme,
      }}
    >
      <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>
    </AppContext.Provider>
  );
}
