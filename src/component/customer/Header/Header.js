import React, {useEffect} from "react";
import logo from '../../../images/logo.png'
import cartimg from '../../../images/cart.png'
import {Link, useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { HeaderContainer, SearchInput, Logo, NavbarItem, CartImage,Navbar,SearchButton,Message, CartItem } from "./HeaderStyle";
import customerServices from "../../../services/customer/customerServices";


function Header({isSearch, search}){
    const [isLogged, setIsLogged] = React.useState(false);
    const [username, setUsername] = React.useState("");
const navigate=useNavigate();
    const onSearch=(e)=>{
        const value = e.target.value;
        if (value === "") {
            isSearch(false);
            return;
        }
        search(value);
        isSearch(true);
    }
    const logOut=()=>{
        customerServices.logout();
        setIsLogged(false);
    }
    const home=()=>{
        navigate('/')
    }
    const [isAdmin, setIsAdmin] = React.useState(false);
    useEffect(() => {
const user = localStorage.getItem("user");
console.log(JSON.parse(user))

        if (user) {
            setUsername(JSON.parse(user).username);
            setIsLogged(true);
            setIsAdmin(JSON.parse(user).isAdmin);
        }
    },[]);
     const {cartTotalQuantity}=useSelector((state)=>state.cart)
    return(
        <HeaderContainer >

            <Logo src={logo} className='logo' alt="" onClick={home}></Logo>
            <div><SearchInput type='text' className="search-input" onChange={(e)=>{onSearch(e)}}/><SearchButton>Search</SearchButton></div>


            <Navbar >
            <NavbarItem><Link to="/" style={{color:"black",marginTop:'12px', textDecoration: 'none' }} >Home</Link></NavbarItem>

            <CartItem>
            <NavbarItem>
            <Link to="/cart">
            <CartImage src={cartimg}/></Link></NavbarItem>
            <Message> {cartTotalQuantity}</Message>
            </CartItem>
                {isLogged ? (
                    <>
                        <NavbarItem><Link to={isAdmin?"/admin/dashboard":"/profile"} style={{color:"black",marginTop:'12px', textDecoration: 'none' }} >{`Hi, ${username}`}</Link></NavbarItem>
                    <NavbarItem onClick={logOut} style={{color:"black", textDecoration: 'none' }}><Link to="/" style={{color:"black",marginTop:'12px', textDecoration: 'none'}}>Log Out</Link></NavbarItem>
                    </> ):( <NavbarItem ><Link to="/login" style={{color:"black",marginTop:'12px', textDecoration: 'none'}}>Log In</Link></NavbarItem>)}

            </Navbar>

        </HeaderContainer>

    )
}

export default Header
