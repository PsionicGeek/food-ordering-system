import { createSlice } from "@reduxjs/toolkit";

    const initialState={
        cartItems:[],
        cartTotalQuantity:0,
        totalAmount:0
    }

    const cartSlice=createSlice({
        name:'cart',
        initialState,
        reducers:{
        addToCart(state,action){
            const itemIndex=state.cartItems.findIndex((ele)=>ele.id===action.payload.id);
            if(itemIndex>=0){
            state.cartItems[itemIndex].cartTotalQuantity+=1;
            }
        else{
            const newItem={...action.payload,cartTotalQuantity:1};
            state.cartItems.push(newItem);
        }

        },
        removeItemCart(state,action){
            const newCart=state.cartItems.filter(ele=>ele.id!==action.payload.id);
            state.cartItems=newCart;
        },
        decreaseItem(state,action){
            const itemIndex=state.cartItems.findIndex((ele)=>ele.id===action.payload.id);
            if(itemIndex>1){
            state.cartItems[itemIndex].cartTotalQuantity-=1;
            }
            
        },
        
         clearCartItem(state,action){
             state.cartItems=[];
         },
         getTotals(state,action){
            let {total,quantity}= state.cartItems.reduce((cartTotal,ele)=>{
                 const {rate,cartQuantity}=ele;
                 const itemTotal=rate*cartQuantity;
 
                 cartTotal.total+=itemTotal
                 cartTotal.quantity+=cartQuantity
 
                 return cartTotal;
             },{
                 total:0,
                 quantity:0
             })
            
             state.totalAmount=total;
             state.cartTotalQuantity=quantity
         },
        }

        

    })
    export const {addToCart,removeItemCart,decreaseItem,clearCartItem,getTotals} = cartSlice.actions;
    export default cartSlice.reducer
