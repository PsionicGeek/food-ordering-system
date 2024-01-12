import React from 'react'
import customerController from '../../../services/customer/customerServices';

import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';
import { CardImage, LeftImageArrowStyles, MainImage, Perslide, RightImageArrowStyles, SlideCartButton, SlideCss, SlideCssH2,PerslideImage } from '../Categories/categoriesStyle';

function Slides() {
  const[dishes,setDishes]=useState([]);
  const cardImageRef = useRef(null);

  useEffect(() => {
    getDish();
},[]);

  const getDish=() => {
    const data = customerController.getDishes().then((data)=>{
      console.log(data);
        setDishes(data);
    });
}
const dispatch=useDispatch();

function AddtoCart(ele){
    dispatch(addToCart(ele));
}
function order(){

  alert('Your order placed successfully!!')

}

  function prevImage(){
    if (cardImageRef.current) {
      const width = cardImageRef.current.clientWidth;
      cardImageRef.current.scrollLeft -= width;
    }
}
function nextImage(){
  if (cardImageRef.current) {
    const width = cardImageRef.current.clientWidth;
    cardImageRef.current.scrollLeft += width;
  }
}
  return (



    <SlideCss>
             <SlideCssH2>Eat what makes you happy</SlideCssH2>
        <MainImage>

        <LeftImageArrowStyles onClick={()=>prevImage()}> ❰❰</LeftImageArrowStyles>
            <RightImageArrowStyles onClick={nextImage}> ❱❱</RightImageArrowStyles>
        <CardImage  ref={cardImageRef}>
            {
                dishes.map((ele)=>{
                     return <>
                     <Perslide key={ele._id}>
                    <PerslideImage  src={ele.image} alt={ele.name}></PerslideImage>
                    <p>{ele.name}</p>
                    <span style={{display:'block'}}>₹{ele.price}

                    <SlideCartButton onClick={()=>AddtoCart(ele)}>+Add toCart</SlideCartButton>
                    </span>
                </Perslide>
                </>
                }

                )
            }
        </CardImage>

       </MainImage>

        </SlideCss>


  )
}
export default Slides;
