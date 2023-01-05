import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { updateConfig } from "./config";
import todoAPI from "./api";

const beforeStart = () => {
  return new Promise((resolve) => {
    try {
      const reqConfig = new XMLHttpRequest();
      reqConfig.open("GET", "/api/config", false); // `false` makes the request synchronous
      reqConfig.send(null);
      if (reqConfig.status === 200) {
        const newData = JSON.parse(reqConfig.responseText);
        updateConfig(newData);
      }
    } catch (e) {
      console.log(e);
    }

    resolve();
  }).then(() => {
    todoAPI.initialize();
  });
};

window.onload = () => {
  beforeStart().then(() => {
    todoAPI.getBetween("2022-11-01", "2022-11-31").then((r) => console.log(r));

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
  });
};
