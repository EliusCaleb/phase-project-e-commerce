
import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


