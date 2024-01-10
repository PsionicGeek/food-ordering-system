import React from "react";
import '../categories.css';
import Food from "../../../foodImages";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../cart/cartSlice";
import '../../Header/Header.css'
function Indianfood(){
    const dispatch=useDispatch()
    let Food1=Food.filter((ele)=>ele.titlename==='IndianFood');
    let navigate=useNavigate();
    
    function AddtoCart(ele){
        dispatch(addToCart(ele))
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
    function detail(id){
        navigate(`/singledish?id=${id}`)
    }
    function Alldish(titleId){
        navigate(`/alldish?id=${titleId}`)
    }
    function order(){
        navigate('/cart')
    }
    return(
        <div className="indi-css">
             {/* <h2>Categories</h2> */}
             <h3 >Indian Food</h3>
            
        <div className="main-image">
        <button className="leftImageArrowStyles" onClick={()=>prevImage()}> ❰❰</button>
            <button className="rightImageArrowStyles" onClick={()=>nextImage()}> ❱❱</button>
        <div className="card-image" >
            {  
                Food1.map((ele)=>{
                    return <>
                     <div key={ele.id} className='Perslide' >
                    <img src={ele.url} alt={ele.title} onClick={()=>detail(ele.id)}></img>
                    <p>{ele.title}{' '}[{ele.quantity}] </p>
                    <span style={{display:'block'}}>₹{ele.rate}</span>
                    <button className="slide-cart-button" onClick={order}>Order</button>{'  '}<button className="slide-cart-button" onClick={()=>AddtoCart(ele)}>+Add toCart</button>
                </div>
                 </>
                })
            }
            <button onClick={()=>Alldish(Food1[0].titleId) } className='imsa' >See more</button>
        </div>
        
        </div>
        
        </div>
    )
}

export default Indianfood