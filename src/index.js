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
        <a href=""> Open-source code </a> by{" "}
        <a href="https://github.com/Joanafgg" target={"_blank"}>
          Joana Garcia{" "}
        </a>{" "}
      </p>
    </div>
  </StrictMode>
);
