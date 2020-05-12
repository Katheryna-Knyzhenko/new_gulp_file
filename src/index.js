import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import App from './js/App';
import ReactDOM from 'react-dom';
import App2 from "./js/App2";

ReactDOM.render(
    <BrowserRouter>
    <App />
    <App2 />
    </BrowserRouter>,
  document.getElementById('root')
);
