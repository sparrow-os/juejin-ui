import * as React from "react";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";


const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#ce93d8",
    },
  },
};
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#ce93d8",
    },
  },
};
const lightTheme = createTheme(lightThemeOptions);
const darkTheme = createTheme(darkThemeOptions);

export function useTheme() {
  const [mode, setMode] = React.useState<"light" | "dark" | "OS">("OS");
  const toggleMode = React.useMemo(
    () => ({
      toggleMode: (theme: "light" | "dark" | "OS") => {
        setMode(theme);
      },
    }),
    []
  );
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  let currentTheme;
  if (mode == "OS") {
    currentTheme = prefersDarkMode ? darkTheme : lightTheme;
  } else {
    currentTheme = mode == "light" ? lightTheme : darkTheme;
  }
  return { currentTheme, toggleMode };
}
