import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Home from './components/home/Home';
import MovieDetail from './components/cart/MovieDetail';
import MoviePlay from './components/cart/MoviePlay';
import CartDetail from './components/cart/Cart';
import Header from './components/layout/Header';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PayPalScriptProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
          <Route path='/video/:id' element={<MoviePlay />} />
          <Route path='/cartdetail' element={<CartDetail />} />
        </Routes>
      </BrowserRouter>
    </PayPalScriptProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
