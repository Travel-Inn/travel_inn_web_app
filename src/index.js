import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './pages/contact';
import Header from './components/header';
import Menu from './pages/menu';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} >
        <Route path="/" element={<App />} />
        <Route path="home" element={<App />} />
        <Route path="booking" element ={<App />} />
        <Route path="menu" element ={<Menu />} />
        <Route path="contact" element ={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
