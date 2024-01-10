import React from "react";
import '../categories.css'
import Food from "../../../foodImages";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../cart/cartSlice";
function Italianfood(){
    const dispatch=useDispatch()
    let Food2=Food.filter((ele)=>ele.titlename==='ItalianFood')
    let navigate=useNavigate();
    function prevImage(){
        let box=document.querySelector('.itali-card-image')
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }
    function nextImage(){
        let box=document.querySelector('.itali-card-image')
        let width=box.clientWidth;
        box.scrollLeft=box.scrollLeft+width;
    }
    function detailed(id){
        navigate(`/singledish?id=${id}`)
    }
    function Alldish(titleId){
        navigate(`/alldish?id=${titleId}`)
    }
    function AddtoCart(ele){
        dispatch(addToCart(ele))
    }
    function order(){
        navigate('/cart')
    }
    return(
        <div className="indi-css">
            <h3>Italian Food</h3>
            <div className="main-image">
                
        <button className="leftImageArrowStyles" onClick={()=>prevImage()}> ❰❰ </button>

            <button className="rightImageArrowStyles" onClick={()=>nextImage()}> ❱❱</button>
        <div className="itali-card-image" >
            {
                Food2.map((ele)=>{
                    return <div key={ele.id} className='Perslide'>
                    <img src={ele.url} alt={ele.title} onClick={()=>detailed(ele.id)}></img>

                    <p>{ele.title}{' '}[{ele.quantity}]</p>

                    <span style={{display:'block'}}>₹{ele.rate}</span>

                    <button className="slide-cart-button" onClick={order}>Order</button>{'  '}
                    
                    <button className="slide-cart-button" onClick={()=>AddtoCart(ele)}>+Add toCart</button>
                </div>
                })
            }
    <button onClick={()=>Alldish(Food2[0].titleId) } className='imsa' >See more</button>
        </div>
        </div>
        </div>
    )
}
export default Italianfood