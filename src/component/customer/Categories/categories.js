import React from "react";
import Food from "../../foodImages";
import './categories.css'
import indian from '../../../images/indianfood.jpg'
import italian from '../../../images/italianfood.jpg'
import korean from '../../../images/korean.png'
import { useNavigate } from "react-router-dom";

function Categories(){
    const navigate = useNavigate();
    let Food1=Food.filter((ele)=>ele.titlename==='IndianFood');
    let Food2=Food.filter((ele)=>ele.titlename==='ItalianFood');
    let Food3=Food.filter((ele)=>ele.titlename==='korean');
    function handleAllDish(titleId) {
        navigate(`/alldish?id=${titleId}`);
    }
    return (
        <div className="category-list">
           <h2>Categories</h2>
           <div className="category-main">
           <div><img src={indian} alt='Indian' onClick={()=>handleAllDish(Food1[0].titleId)} ></img>
           <p >Indian cuisins</p></div> 
           <div><img src={italian} alt='italian' onClick={()=>handleAllDish(Food2[0].titleId) }  ></img>
           <p>Italian cuisins</p></div> 
           <div><img src={korean} alt='korean'  onClick={()=>handleAllDish(Food3[0].titleId) } ></img>
           <p>Korean cuisins</p></div>
           </div>
        </div>
    )
}
export default Categories