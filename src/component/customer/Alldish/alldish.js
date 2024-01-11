import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { addToCart } from "../cart/cartSlice";
import { useDispatch } from "react-redux";
import Header from '../Header/Header';
import { useNavigate } from "react-router-dom";
import customerController from "../../../services/customer/customerServices";
import Footer from "../footer/footer";
import { AllDishCard, PerslideImage, SlideCartButton, Perslide } from "../Categories/categoriesStyle";


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

  return (
    <>
      <Header />

      <AllDishCard>
        {details.map((ele) => (
          <Perslide key={ele._id} >
            <PerslideImage src={ele.image} alt={ele.category.name}></PerslideImage>
            <p>{ele.name}{' '}[{ele.quantity}]</p>
            <span style={{ display: 'block' }}>₹{ele.price}
            <SlideCartButton  onClick={order}>Order</SlideCartButton>{'  '}
            <SlideCartButton  onClick={() => AddtoCart(ele)}>+Add to Cart</SlideCartButton>
            </span>
          </Perslide>
        ))}

      <Footer/>
    </AllDishCard>
    </>
  );
}

export default Alldish;
