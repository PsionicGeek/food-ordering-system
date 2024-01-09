import React from 'react'
import Food from '../../foodImages';
import './slides.css';

import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';


function Slides() {
let Food1=Food.filter((ele)=>ele.titleId===4);
const dispatch=useDispatch();

function AddtoCart(ele){
    dispatch(addToCart(ele));
}
  
  function prevImage(){
    let box=document.querySelector('.card-image')
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
}
function nextImage(){
  let box=document.querySelector('.card-image')
  let width=box.clientWidth;
  box.scrollLeft=box.scrollLeft+width;
}
  return (
    
    <div className="slides-css">
             <h2 >Taste Your Bites</h2>
        <div className="main-image">
        <button className="leftImageArrowStyles" onClick={()=>prevImage()}> ❰❰</button>
            <button className="rightImageArrowStyles" onClick={()=>nextImage()}> ❱❱</button>
        <div className="card-image" >
            {  
                Food1.map((ele)=>(
                
                     <div key={ele.id} className='Perslide' >
                    <img src={ele.url} alt={ele.title}></img>
                    <p>{ele.title}{' '}[{ele.quantity}] </p>
                    <span style={{display:'block'}}>₹{ele.rate}</span>
                    <button className="slide-cart-button">Order</button>{'  '}<button className="slide-cart-button" onClick={()=>AddtoCart(ele)}>+Add toCart</button>
                </div>
                 
                ))
            }
        </div>
        
        </div>
        
        </div>
        
  )
}
export default Slides;
