import React, {useEffect} from 'react'
import Indianfood from '../Categories/Indianfood/Indianfood';
import Koreanfood from '../Categories/koreanfood/Koreanfood';
import Italianfood from '../Categories/Italianfood/Italianfood';
import Header from '../Header/Header';
import customerController from "../../../services/Customer/customerServices";
import {addToCart} from "../cart/cartSlice";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";


export default function Menu() {
  const[dishes,setDishes]=React.useState([]);
  let navigate=useNavigate();
  const dispatch=useDispatch()
    useEffect(
        () => {

                setDishes( customerController.getDishes());



        },
        [],
    );
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


  return (
    <>
    <Header/>
    { dishes.map((ele) => {
      return(
          <div key={ele.id} className='Perslide'>

            <img src={ele.url} alt={ele.title}></img>
            <p>{ele.name}{' '}[{ele.quantity}]</p>
            <span style={{display:'block'}}>₹{ele.rate}</span>
            <button className="slide-cart-button" onClick={order}>Order</button>{'  '}<button className="slide-cart-button" onClick={()=>AddtoCart(ele)}>+Add toCart</button>
          </div>
      )

    })
}

    // <Indianfood />
    // <Italianfood />
    // <Koreanfood />
    </>
  )
}
