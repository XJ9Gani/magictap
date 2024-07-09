import React from "react";
import * as ReactDomClient from "react-dom/client";
import Auth from "./Auth";
import "./styles/style.css";

const auth = ReactDomClient.createRoot(document.querySelector(".auth"));
auth.render(<Auth />);
