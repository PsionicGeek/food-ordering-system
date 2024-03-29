import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import { useDispatch } from 'react-redux';
import customerController from '../../../services/customer/customerServices';
import {addToCart, clearCartItem} from '../cart/cartSlice';
import { CardImage, IndiCss, IndiCssH3, MainImage, Perslide, PerslideImage, SlideCartButton } from '../Categories/categoriesStyle';
import customerServices from "../../../services/customer/customerServices";
import Footer from "../footer/footer";
import SeachView from "../SearchView";
export default function Menu() {


  const dispatch=useDispatch();
  const[categories,setCategories]=useState([]);
  const[dishes,setDishes]=useState([]);


  useEffect(() => {
      getCategories();
  },[]);

    const getCategories=() => {
      const data = customerController.getCategories().then((data)=>{
        console.log(data);
          setCategories(data);
      });
  }
  useEffect(() => {
    getDishes();
},[]);

  const getDishes=() => {
    const data = customerController.getDishes().then((data)=>{
      console.log(data);
        setDishes(data);
    });
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
function AddtoCart(ele){
  dispatch(addToCart(ele));
}
    const [isSearch, setIsSearch] = React.useState(false);
    const [search, setSearch] = React.useState("");


  return(
    <>
        <Header isSearch={setIsSearch} search={setSearch}/>
        {isSearch ? (
            <SeachView  search={search}/>
        ):(<>


        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width:"100vw"

        }}>{
          categories.map((category) => {
            const categoryDishes = dishes.filter((ele) => ele.category.name === category.name);
            if (categoryDishes.length > 0) {
              return <>
                <IndiCss>
                  <IndiCssH3>{category.name}</IndiCssH3>
                  <MainImage>

                    <CardImage>{
                      categoryDishes.map((ele) => {
                            return <>
                              <Perslide key={ele.id} className='Perslide'>
                                <PerslideImage src={ele.image} alt={ele.title}></PerslideImage>
                                <p>{ele.name}{' '} </p>
                                <span style={{display: 'block'}}>₹{ele.price}
                                  <SlideCartButton onClick={() => AddtoCart(ele)}>+Add toCart</SlideCartButton>
                    </span>
                              </Perslide>
                            </>
                          }
                      )
                    }


                    </CardImage>

                  </MainImage>

                </IndiCss>
              </>
            }
          })
        }
        </div>
                </>)}
        <Footer/>

        </>
        )
        }
