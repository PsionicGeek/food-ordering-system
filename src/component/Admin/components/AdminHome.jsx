
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
import SideNavBar from "../SideNavBar";
import React from "react";
const AdminHome = () => {
    return (
        <div style={{height:'100vh',width:'100vw'}}>
            <div style={{
                display: 'flex',
            }}>
                <SideNavBar />

<div style={{height:'100vh', width:`100vw`}}>
            <Outlet /></div>
            </div>
        </div>
    )
}
export default AdminHome;
