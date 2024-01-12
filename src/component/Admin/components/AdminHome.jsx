
import {BrowserRouter as Router, Route, Routes, Link, Outlet, useNavigate} from "react-router-dom";
import SideNavBar from "../SideNavBar";
import React, {useEffect} from "react";
const AdminHome = () => {
    const navigate = useNavigate();
    const isLogin=localStorage.getItem("isLogged");
    const user = localStorage.getItem('user');

    const isAdmin = localStorage.getItem('isAdmin');
    useEffect(() => {
        console.log(isAdmin)
        if(!isLogin){
            navigate('/login');
        }
        else if(isLogin && isAdmin==="false"){
            alert("You are not authorized to access this page")
            navigate('/');
            return;
        }
    }, []);


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
