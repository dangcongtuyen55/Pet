import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./styles/index.scss";
import App from "./App";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./utils/constants";
import store from "./redux/store";
import { Provider } from "react-redux";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <ToastContainer autoClose={1000}></ToastContainer> */}
  </BrowserRouter>
);

reportWebVitals();
