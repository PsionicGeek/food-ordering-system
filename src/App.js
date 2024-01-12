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
import AdminLogin from "./component/admin/AdminLogin";
import AdminHome from "./component/admin/components/AdminHome";
import Categories from "./component/admin/components/Categories";
import Dishes from "./component/admin/components/Dishes";
import Orders from "./component/admin/components/Orders";
import Users from "./component/admin/components/Users";
import AdminProfile from "./component/admin/components/Profile";
import Dashboard from "./component/admin/components/Dashboard";






const router= createBrowserRouter(
    createRoutesFromElements(
        <Route>

          <Route path='/' element={<CustomerHome />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/profile' element={<Profile />} />

          <Route path='/alldish' element={<Alldish />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path="/login" element={<AdminLogin />} />

          <Route path="/admin" element={<AdminHome />}>
            <Route path="/admin/dashboard"  element={<Dashboard/>} />

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



