
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { addToCart } from "../cart/cartSlice";
import Food from '../../foodImages';
import { useDispatch } from "react-redux";
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";

 function Alldish() {
    const [details,setDetails]=useState([]);

    const location=useLocation();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        let data = Food.filter((ele)=>ele.titleId==query.get('id'));
      setDetails(data);
    }, []);
   
    let query=new URLSearchParams(location.search);
    function AddtoCart(ele){
        dispatch(addToCart(ele));
    }
    function order(){
        navigate.push('/cart')
    }

    
    return(
        <div className="sfp-bg">
            <Header />
           
            <div className="All-dish-card">
            {
                details.map((ele)=>{
                    return <div key={ele.id} className='Perslide'>
                    <img src={ele.url} alt={ele.title}></img>
                    <p>{ele.title}{' '}[{ele.quantity}]</p>
                    <span style={{display:'block'}}>₹{ele.rate}</span>
                    <button className="slide-cart-button" onClick={order}>Order</button>{'  '}<button className="slide-cart-button" onClick={()=>AddtoCart(ele)}>+Add toCart</button>
                </div>
                
                })
            }
            </div>
             

        </div>
    )
}
export default Alldish;