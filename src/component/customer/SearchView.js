
import React, {useEffect} from 'react';
import customerServices from "../../services/customer/customerServices";
import {AllDishCard, Perslide, PerslideImage, SlideCartButton} from "./Categories/categoriesStyle";
import {addToCart} from "./cart/cartSlice";
import {useDispatch} from "react-redux";
import Footer from "./footer/footer";
const SearchView = ({ search }) => {
    const [dishes, setDishes] = React.useState([]);
    const [categories, setCategories] = React.useState([]);
    useEffect(() => {
        getSearchResult();
    },[search]);
    const dispatch = useDispatch();
    const getSearchResult = async () => {
        customerServices.getDishes().then((data) => {
            data = data.filter((dish) => {
                return dish.name.toLowerCase().includes(search.toLowerCase());
            });
            setDishes(data);
        });

    }
    function AddtoCart(ele) {
        dispatch(addToCart(ele));
    }

    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",

        }}>
            <AllDishCard>
            {dishes.map((ele) => (
                <Perslide key={ele._id} >
                    <PerslideImage src={ele.image} alt={ele.category.name}></PerslideImage>
                    <p>{ele.name}</p>
                    <span style={{ display: 'block' }}>₹{ele.price}

                        <SlideCartButton  onClick={() => AddtoCart(ele)}>+Add to Cart</SlideCartButton>
            </span>
                </Perslide>
            ))}
            </AllDishCard>
            <Footer/>
        </div>
    )

}

export default SearchView;
