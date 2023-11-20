import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Home from './components/home/Home';
import MovieDetail from './components/cart/MovieDetail';
import MoviePlay from './components/cart/MoviePlay';
import CartDetail from './components/cart/Cart';
import cartReducer from './components/reducer/reducer';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import Customer from './components/customer/Customer';
import HomeSearch from './components/home/HomeSearch';
import HomeSearchMovie from './components/home/HomeSearchMovie';
import HomeMoviePlay from './components/home/HomeMoviePlay';
const middleware = [thunk];
const rootReduce = combineReducers({
  cartReducer
});
const store = createStore(rootReduce, applyMiddleware(...middleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='/movie/:id' element={<MovieDetail />} />
            <Route path='/video/:id' element={<MoviePlay />} />
            <Route path='/cartdetail' element={<CartDetail />} />
            <Route path='/customer' element={<Customer /> }/>
            <Route path='/home/search/:keywork' element={<HomeSearch />} />
            <Route path='/home-search-movie' element={<HomeSearchMovie />} />
            <Route path='/movie-play' element={<HomeMoviePlay />} />
          </Routes>
        </BrowserRouter>
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
