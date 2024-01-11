import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect , useState, useRef} from "react";
import customerController from "../../services/customer/customerServices";
import { CategoryList, CategoryListH2, CategoryMain, CategoryMainImage, CategoryMainP,LeftImageArrowStyles,RightImageArrowStyles } from "./categoriesStyle";
function Categories(){
    const navigate = useNavigate();
    const[categories,setCategories]=useState([]);
    

    useEffect(() => {
        getCategories();
    },[]);
    
      const getCategories=() => {
        const data = customerController.getCategories().then((data)=>{
          console.log(data);
            setCategories(data);
        });
    }
          
       
    function handleAllDish(categoryName) {
            navigate(`/alldish?categoryName=${categoryName}`); 
    }
    return (
        
        <CategoryList>
        <CategoryListH2>Categories</CategoryListH2>
        
         <CategoryMain>{
        categories.map((ele)=>{
            return <>
           <div  key={ele._id}>
          
            <CategoryMainImage src={ele.image} onClick={()=>handleAllDish(ele.name)} ></CategoryMainImage>
           <CategoryMainP>{ele.name}</CategoryMainP>
           </div>
            </>
            }
        )
         }
        
        </CategoryMain>
     
        </CategoryList>
        
    )
}
export default Categories