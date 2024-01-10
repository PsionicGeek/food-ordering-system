import React from "react";
import CustomerHome from "./component/customer/Home/CustomerHome";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import './App.css';
import Profile from "./component/customer/Profile/Profile";
import Cart from "./component/customer/cart/cart";
import Login from './component/customer/Login/login'
import store from './redux/store';
import { getTotals } from "./component/customer/cart/cartSlice";
import { Provider } from "react-redux";
import Alldish from './component/customer/Alldish/alldish';
import Menu from "./component/customer/Menu/menu";
import AdminLogin from "./component/Admin/AdminLogin";
import AdminHome from "./component/Admin/components/AdminHome";
import Categories from "./component/Admin/components/Categories";
import Dishes from "./component/Admin/components/Dishes";
import Orders from "./component/Admin/components/Orders";
import Users from "./component/Admin/components/Users";
import AdminProfile from "./component/Admin/components/Profile";






const router= createBrowserRouter(
    createRoutesFromElements(
        <Route>

          <Route path='/' element={<CustomerHome />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/alldish' element={<Alldish />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path="/admin-login" element={<AdminLogin />} />

          <Route path="/admin" element={<AdminHome />}>

            <Route path="categories"  element={<Categories/>} />
            <Route path="dishes"  element={<Dishes/>} />
            <Route path="orders"  element={<Orders/>} />
            <Route path="users"  element={<Users/>} />
            <Route path="profile"  element={<AdminProfile/>} />
          </Route>
        </Route>

    )
)
function App() {
  // store.dispatch(getTotals());
  return (

      <div>
        <Provider store={store}>
        <RouterProvider router={router}/>
          </Provider>
      </div>

  );
}

export default App;



