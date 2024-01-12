import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { addToCart } from "../cart/cartSlice";
import { useDispatch } from "react-redux";
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";
import customerController from "../../../services/customer/customerServices";
import Footer from "../footer/footer";
import { AllDishCard, PerslideImage, SlideCartButton, Perslide } from "../Categories/categoriesStyle";
import SeachView from "../SearchView";


function Alldish() {
  const [details, setDetails] = useState([]);
  const[dishes,setDishes]=useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [location.search]);

  const fetchData = async () => {
    try {
      const fetchedDishes = await customerController.getDishes();
      setDishes(fetchedDishes);

      let categoryName = new URLSearchParams(location.search).get('categoryName');
      const data = fetchedDishes.filter((ele) => ele.category.name === categoryName);
      setDetails(data);
    } catch (error) {
      console.error("Error fetching dishes:", error);
    }
  };


  function AddtoCart(ele) {
    dispatch(addToCart(ele));
  }

  function order() {
    navigate('/cart');
  }
  const [isSearch, setIsSearch] = React.useState(false);
  const [search, setSearch] = React.useState("");
  return (
    <div >
      <Header isSearch={setIsSearch} search={setSearch}/>
      {isSearch ? (
          <SeachView  search={search}/>
      ):(<>
<div style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width:"100vw",
  height:"55vh",
  overflowY:"scroll"

}}>
      <AllDishCard>

        {details.length === 0 ?

            <h1>Ohh no! currently We're out of Stock, Check out other categories!!</h1>
            :
          details.map((ele) => (
          <Perslide key={ele._id} >
            <PerslideImage src={ele.image} alt={ele.category.name}></PerslideImage>
            <p>{ele.name}</p>
            <span style={{ display: 'block' }}>₹{ele.price}

            <SlideCartButton  onClick={() => AddtoCart(ele)}>+Add to Cart</SlideCartButton>
            </span>
          </Perslide>
        ))}


    </AllDishCard>
</div>
      </>)}
      <Footer/>


</div>

  );
}

export default Alldish;
