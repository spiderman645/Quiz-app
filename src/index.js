import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import Trial from "./trial";
import 'bootstrap/dist/css/bootstrap.min.css'


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Trial/>
  </StrictMode>,
  rootElement
);