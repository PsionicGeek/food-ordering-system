import React from "react";
import logo from '../../../images/logo.png'
import cartimg from '../../../images/cart.png'
import './Header.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Header(){
     const {cartTotalQuantity}=useSelector((state)=>state.cart)
    return(
        <div className="header">
      
            <img src={logo} className='logo' alt=""></img>
            <div><input type='text' className="search-input"/><button >Search</button></div>

            
            <ul className="navbar">
            <li><Link to="/" style={{color:"black",marginTop:'12px', textDecoration: 'none' }} >Home</Link></li>
            <li><Link to="/cart"><img className="cartimg"  src={cartimg} alt=""></img></Link></li>
            <span className="msg"> {cartTotalQuantity}</span>
            {' '}
            <li><Link to="/profile" style={{color:"black",marginTop:'12px', textDecoration: 'none' }} >Profile</Link></li>  
            <li><Link to="/login" style={{color:"black",marginTop:'12px', textDecoration: 'none' }}>Log out</Link></li>  
            </ul>
            
        </div>

    )
}

export default Header