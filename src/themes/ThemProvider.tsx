import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import RTL from "./RTL";
import { lightTheme, darkTheme } from "./theme";

type PropsType = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  language: LanguageContextType;
  setLanguage: (language: LanguageContextType) => void;
};

export type LanguageContextType = {
  language: "en" | "fa";
  direction: "ltr" | "rtl";
};

const ThemeContext = React.createContext<ThemeContextType>(
  {} as ThemeContextType
);

export function useTheme() {
  return React.useContext(ThemeContext);
}



export default function CustomThemeProvider(props: PropsType) {
  const [themMode, setThemMode] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<LanguageContextType>({
    language: "en",
    direction: "ltr",
  })
  
  darkTheme.direction = language.direction;
  lightTheme.direction = language.direction;

  return (
    <ThemeContext.Provider
      value={{
        theme: themMode,
        setTheme: setThemMode,
        language,
        setLanguage,
      }}
    >
      <ThemeProvider theme={themMode === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <RTL isRtl={language.direction === "rtl"}>
          <Box dir={language.direction}>{props.children}</Box>
        </RTL>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
