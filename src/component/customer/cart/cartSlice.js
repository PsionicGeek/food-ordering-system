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
            if(!localStorage.getItem('isLogged')){
                alert('Please Login First');
                return;
            }
            const itemIndex=state.cartItems.findIndex((ele)=>ele._id===action.payload._id);
            state.cartTotalQuantity+=1;
            state.totalAmount+=parseInt(action.payload.price);
            console.log(state.totalAmount);
            if(itemIndex>=0){
            state.cartItems[itemIndex].cartTotalQuantity+=1;
            }
        else{
            const newItem={...action.payload,cartTotalQuantity:1};
            state.cartItems.push(newItem);
        }

        },
        removeItemCart(state,action){
            state.cartTotalQuantity-=action.payload.cartTotalQuantity;
            state.totalAmount-=parseInt(action.payload.price)*action.payload.cartTotalQuantity;
            const newCart=state.cartItems.filter(ele=>ele._id!==action.payload._id);
            state.cartItems=newCart;
        },
        decreaseItem(state,action){
            state.cartTotalQuantity-=1;
            state.totalAmount-=parseInt(action.payload.price);
            const itemIndex=state.cartItems.findIndex((ele)=>ele._id===action.payload._id);
            if(itemIndex>-1){
                if(state.cartItems[itemIndex].cartTotalQuantity==1){
                    const newCart=state.cartItems.filter(ele=>ele._id!==action.payload._id);
                    state.cartItems=newCart;
                }
                else{
            state.cartItems[itemIndex].cartTotalQuantity-=1;}
                }
        },

         clearCartItem(state,action){
             state.cartItems=[];
             state.cartTotalQuantity=0;
                state.totalAmount=0;
         },
         getTotals(state,action){
            let {total,quantity}= state.cartItems.reduce((cartTotal,ele)=>{
                 const {price,cartQuantity}=ele;
                 const itemTotal=price*cartQuantity;

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
