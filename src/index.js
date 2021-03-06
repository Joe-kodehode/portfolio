import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </React.StrictMode>
);
