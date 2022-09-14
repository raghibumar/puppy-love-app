import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HomeContextProvider } from "./context/HomeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HomeContextProvider>
      <App />
    </HomeContextProvider>
  </React.StrictMode>
);
