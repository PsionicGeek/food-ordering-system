import React from 'react'
import { useNavigate } from 'react-router-dom'
import './menu.css';

export default function Menubutton() {
    const navigate=useNavigate();

    function goToMenu(){
        navigate('/menu');
    }
  return (

    <button className='menubttn' onClick={goToMenu}>Explore Full Menu</button> 
  )
}
