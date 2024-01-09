
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    createBrowserRouter,
    createRoutesFromElements, RouterProvider
} from 'react-router-dom';
import AdminDashboard from "./Admin/admin";
import SideNavBar from "./Admin/SideNavBar";
import AdminHome from "./Admin/components/AdminHome";
import Categories from "./Admin/components/Categories";
import Dishes from "./Admin/components/Dishes";
import Orders from "./Admin/components/Orders";
import Users from "./Admin/components/Users";
import Profile from "./Admin/components/Profile";
import AdminLogin from "./Admin/AdminLogin";


const router= createBrowserRouter(
    createRoutesFromElements(
        <Route>

            <Route path="/admin-login" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminHome />}>

            <Route path="categories"  element={<Categories/>} />
            <Route path="dishes"  element={<Dishes/>} />
            <Route path="orders"  element={<Orders/>} />
            <Route path="users"  element={<Users/>} />
            <Route path="profile"  element={<Profile/>} />
        </Route>
        </Route>

    )
)
function App() {
  return (

      <div>

          <RouterProvider router={router}/>
      </div>

  );
}

export default App;
