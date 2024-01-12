import React from 'react'
import Header from '../Header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { clearCartItem, addToCart, decreaseItem, removeItemCart } from './cartSlice';
import Footer from '../footer/footer';
import { CartBackground, CartContainer, CartMain, CartMainBody, CartMainBodyButton, CartMainBodyDiv, CartMainBodyDiv2, CartMainBodyImage, CartMainHead, CartMainHeadH3, CartMainHeadH3H3, ClearCartButton, OrderButton, QuantityButton } from './Cartstyle';
import customerServices from "../../../services/customer/customerServices";
import SeachView from "../SearchView";
import {Box, Modal} from "@mui/material";
import PaymentForm from "../PaymentForm";
function Cart() {
    const cart=useSelector((state)=>state.cart);
    const dispatch=useDispatch();
    const total=useSelector((state)=>state.cart.totalAmount)
    const [open, setOpen] = React.useState(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    function remove(ele){
        dispatch(removeItemCart(ele))
    }
    function decrease(cartitem){
        dispatch(decreaseItem(cartitem))
    }
    function increase(cartItem){
        dispatch(addToCart(cartItem))
    }
    function clearcart(){
        dispatch(clearCartItem())
    }
    function order(){
        const items=cart.cartItems.map((ele)=>{
            return{
                "id":ele._id,
                "quantity":ele.cartTotalQuantity,
                "dishName":ele.name,
            }
        });
        const data=customerServices.order(items).then((data)=>{
            console.log(data);
            alert('Your order placed successfully!!');

        });
        dispatch(clearCartItem())
    }
    const [isSearch, setIsSearch] = React.useState(false);
    const [search, setSearch] = React.useState("");

  return (
    <CartBackground>
        <Header isSearch={setIsSearch} search={setSearch}/>
        {isSearch ? (
            <SeachView  search={search}/>
        ):(<>
            <CartContainer><h1 style={{padding:'10px'}}>Shopping cart</h1>
            {
                cart.cartItems.length===0 ?(
                    <div style={{marginBottom:'165px',padding:'10px'}}>
                        <p>Your cart is currently empty</p>

                    </div>
                ) :(
                    <CartMain>


                        {
                            cart.cartItems?.map(cartItems=>(
                                    <CartMainBody key={cartItems._id}>
                                     <CartMainBodyDiv>
                                        <CartMainBodyImage src={cartItems.image}   alt={cartItems.name}/>
                                     <div style={{paddingLeft:'5px'}}>
                                     <h3>{cartItems.name}</h3>
                                     <CartMainBodyButton onClick={()=>remove(cartItems)}>Delete</CartMainBodyButton>
                                     </div>
                                     </CartMainBodyDiv>

                                     <CartMainBodyDiv2>₹{cartItems.price}</CartMainBodyDiv2>


                                        <QuantityButton onClick={()=>decrease(cartItems)}>-</QuantityButton><span style={{marginTop:'10px'}}>{cartItems.cartTotalQuantity}</span>
                                        <QuantityButton  onClick={()=>increase(cartItems)}>+</QuantityButton>


                                     <CartMainBodyDiv2>
                                        <div style={{color:'green',fontSize:'23px'}}>₹{cartItems.cartTotalQuantity*cartItems.price} </div>
                                     </CartMainBodyDiv2>
                                    </CartMainBody>
                            ))
                        }
                        <div style={{display:'flex',justifyContent:'space-between',width:'85vw',marginLeft:'10px'}}>
                            <div>
                               <ClearCartButton onClick={()=>clearcart()}> Clear cart </ClearCartButton>
                            </div>
                            <div style={{display:"flex"}}>
                                <p>Subtotal <span style={{fontSize:'12px'}}>*including all taxes*</span>: <b><span style={{fontSize:'23px'}}> ₹ {total}/-</span></b></p>

                                <OrderButton onClick={handleOpen}>Order</OrderButton>
                            </div>
                        </div>
                    </CartMain>
                )
            }
            </CartContainer>
            </>)}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <PaymentForm order={order}/>
            </Box>
        </Modal>

            <Footer/>

        </CartBackground>
    )
}
export default Cart;
