import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { lightTheme, darkTheme } from "./theme";

type PropsType = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

export const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

export default function CustomThemeProvider(props: PropsType) {
  const [themMode, setThemMode] = useState<"light" | "dark">("light");
  return (
    <ThemeContext.Provider value={{ theme: themMode, setTheme: setThemMode }}>
      <ThemeProvider theme={themMode === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
