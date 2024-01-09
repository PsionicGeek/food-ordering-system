import React from "react";
import CustomerHome from "./component/customer/Home/CustomerHome";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import Profile from "./component/customer/Profile/Profile";
import Cart from "./component/customer/cart/cart";
import Login from './component/customer/Login/login'
import store from './redux/store';
import { getTotals } from "./component/customer/cart/cartSlice";
import { Provider } from "react-redux";
import Alldish from './component/customer/Alldish/alldish';
function App() {
  store.dispatch(getTotals());

  return (
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
    <Route path='/' element={<CustomerHome />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/profile' element={<Profile />} />
    <Route path='/login' element={<Login />} />
    <Route path='/alldish' element={<Alldish />}/>
    </Routes>
    </Provider>
  </BrowserRouter>
  
);

       
}

export default App;
