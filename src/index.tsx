import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CustomThemeProvider } from "./themes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </Provider>
);

reportWebVitals();
