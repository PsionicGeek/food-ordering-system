import React from "react";
import logo from '../../../images/logo.png'
import cartimg from '../../../images/cart.png'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HeaderContainer, SearchInput, Logo, NavbarItem, CartImage,Navbar,SearchButton,Message, CartItem } from "./HeaderStyle";


function Header(){
     const {cartTotalQuantity}=useSelector((state)=>state.cart)
    return(
        <HeaderContainer>

            <Logo src={logo} className='logo' alt=""></Logo>
            <div><SearchInput type='text' className="search-input"/><SearchButton>Search</SearchButton></div>


            <Navbar >
            <NavbarItem><Link to="/" style={{color:"black",marginTop:'12px', textDecoration: 'none' }} >Home</Link></NavbarItem>
            
            <CartItem>
            <NavbarItem>
            <Link to="/cart">
            <CartImage src={cartimg}/></Link></NavbarItem>
            <Message> {cartTotalQuantity}</Message>
            </CartItem>
            <NavbarItem><Link to="/profile" style={{color:"black",marginTop:'12px', textDecoration: 'none' }} >Profile</Link></NavbarItem>
            <NavbarItem><Link to="/login" style={{color:"black",marginTop:'12px', textDecoration: 'none' }}>Log out</Link></NavbarItem>
            </Navbar>

        </HeaderContainer>

    )
}

export default Header
