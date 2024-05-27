/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
      <p className="footer">
        {" "}
        <a
          href="https://github.com/Joanafgg/weather-react-app"
          target={"_blank"}
          rel="noreferrer"
        >
          {" "}
          Open-source code{" "}
        </a>{" "}
        by{" "}
        <a
          href="https://github.com/Joanafgg"
          target={"_blank"}
          rel="noreferrer"
        >
          Joana Garcia{" "}
        </a>{" "}
      </p>
    </div>
  </StrictMode>
);
