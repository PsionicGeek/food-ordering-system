import React from 'react'
import Header from '../Header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { clearCartItem, addToCart, decreaseItem, removeItemCart } from './cartSlice';
import Footer from '../footer/footer';
import { CartBackground, CartContainer, CartMain, CartMainBody, CartMainBodyButton, CartMainBodyDiv, CartMainBodyDiv2, CartMainBodyImage, CartMainHead, CartMainHeadH3, CartMainHeadH3H3, ClearCartButton, OrderButton, QuantityButton } from './Cartstyle';
function Cart() {
    const cart=useSelector((state)=>state.cart);
    const dispatch=useDispatch();
    const total=useSelector((state)=>state.cart.totalAmount)

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
        alert('Your order placed successfully!!')
        dispatch(clearCartItem())
    }

  return (
    <CartBackground>
            <Header />
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
                        <div style={{display:'flex',justifyContent:'space-between',width:'1100px',marginLeft:'10px'}}>
                            <div>
                               <ClearCartButton onClick={()=>clearcart()}> Clear cart </ClearCartButton>
                            </div>
                            <div>
                                <p>Subtotal <span style={{fontSize:'12px'}}>*including all taxes*</span>: <b><span style={{fontSize:'23px'}}> ₹ {total}/-</span></b></p>

                                <OrderButton onClick={order}>Order</OrderButton>
                            </div>
                        </div>
                    </CartMain>
                )
            }
            </CartContainer>

            <Footer/>

        </CartBackground>
    )
}
export default Cart;
