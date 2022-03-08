import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initDataStore } from "@zly/data-store";

initDataStore({
  server: "https://registry.zlyt.pub:9443/api",
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
