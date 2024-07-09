import React from "react";
import * as ReactDomClient from "react-dom/client";
import App from "./App";
import "./styles/style.css";

const main = ReactDomClient.createRoot(document.querySelector(".main"));
main.render(<App />);
