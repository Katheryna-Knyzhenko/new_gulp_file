import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import App from './js/App';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
  document.getElementById('root')
);
