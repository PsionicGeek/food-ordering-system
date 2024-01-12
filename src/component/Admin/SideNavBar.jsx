import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import styled from 'styled-components';
import customerServices from "../../services/customer/customerServices";

const SidebarParent = styled.div`
  background: black;
  width: 250px;
  height: 100vh;
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  //Change the background color if 'active' prop is received
  background: ${props => props.active ? "#b15b00" : ""};
  margin: 4px 12px;
  border-radius: 4px;
  
  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
  }
  
  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;

const SidebarText ={
  color: "white",
  fontWeight: "bold",
textDecoration: "none"
}
const SideNavBar = ({defaultActive}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActive || 1);
  const SidebarItems = [
    {
      name: "Dashboard",
        path: "/admin/dashboard",
    },
    {
      name: "Categories",
      path: "/admin/categories",
    },
    {
      name: "Dishes",
      path: "/admin/dishes",
    },
    {
      name: "Order List",
      path: "/admin/orders",
    },
    {
      name: "Users",
      path: "/admin/users",
    },
    {
      name: "Profile",
      path: "/admin/profile",
    },


  ];


  return (
    <SidebarParent>
      <SidebarItem>
          <NavLink to="/admin/dashboard" style={SidebarText}>Dashboard</NavLink>
      </SidebarItem>
        <SidebarItem>
          <NavLink to="/admin/categories" style={SidebarText}>Categories</NavLink>
        </SidebarItem>
        <SidebarItem>
          <NavLink to="/admin/dishes" style={SidebarText}>Dishes</NavLink>
        </SidebarItem>
        <SidebarItem>
          <NavLink to="/admin/orders" style={SidebarText}>Order List</NavLink>
        </SidebarItem>
        <SidebarItem>
          <NavLink to="/admin/users" style={SidebarText}>Users</NavLink>
        </SidebarItem>
        <SidebarItem>
          <NavLink to="/admin/profile" style={SidebarText}>Profile</NavLink>
        </SidebarItem>
      <SidebarItem>
        <NavLink to="/login" onClick={customerServices.logout} style={SidebarText}>Log Out</NavLink>
      </SidebarItem>
    </SidebarParent>
  );
};
export default SideNavBar;
