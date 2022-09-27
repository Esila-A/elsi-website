import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import "./firebase";
import './scss/main.scss';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename="/elsi-website">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
