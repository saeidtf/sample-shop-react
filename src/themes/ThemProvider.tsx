import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import RTL from "./RTL";
import { lightTheme, darkTheme } from "./theme";

type PropsType = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  language: LanguageContextType;
  changeLanguage: (language: LanguageContextType) => void;
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
  const saveLanguage =
    localStorage.getItem("language") ||
    JSON.stringify({ language: "en", direction: "ltr" });
  const [themMode, setThemMode] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState<LanguageContextType>(
    JSON.parse(saveLanguage)
  );

  useEffect(() => {
    document.dir = language.direction;
    document.documentElement.lang = language.language;
  }, [language]);

  const changeLanguage = (value: LanguageContextType) => {
    setLanguage(value);
    localStorage.setItem("language", JSON.stringify(value));
  };

  darkTheme.direction = language.direction;
  lightTheme.direction = language.direction;

  return (
    <ThemeContext.Provider
      value={{
        theme: themMode,
        setTheme: setThemMode,
        language,
        changeLanguage,
      }}
    >
      <ThemeProvider theme={themMode === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <RTL isRtl={language.direction === "rtl"}>{props.children}</RTL>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
