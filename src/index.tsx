import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CustomThemeProvider } from "./themes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <CustomThemeProvider>
    <App />
  </CustomThemeProvider>
);

reportWebVitals();
