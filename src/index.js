import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import './fonts/Karla/Karla-Medium.ttf';
import './fonts/Karla/Karla-Regular.ttf';
import './fonts/Karla/Karla-Bold.ttf';
import './fonts/Karla/Karla-ExtraBold.ttf';
import './fonts/MarkaziText/MarkaziText-Medium.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
