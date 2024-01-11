
import axios from "axios";

function getDishes(){
    const data = axios.get('http://localhost:8000/user/getDishes')
    .then((res)=>{
        console.log(res.data)
        return res.data;
    })
    .catch((err)=>{
        console.log(err)
    })
    return data;
}
function getCategories(){
    const data = axios.get('http://localhost:8000/admin/getCategories')
    .then((res)=>{
        console.log(res.data)
        return res.data;
    })
    .catch((err)=>{
        console.log(err)
    })
    return data;
}
function getAllOrders(){
    const data = axios.get('http://localhost:8000/user/allOrders/659f8f7744dd5dd23fc828e5')
    .then((res)=>{
        console.log(res.data)
        return res.data;
    })
    .catch((err)=>{
        console.log(err)
    })
    return data;
}
async function order() {
//     try {
//       const response = await axios.post('http://localhost:8000/user/bookOrder', {
//         user_id: '', // Replace with the actual user ID
//         dishList: [];
//
//       if (response.status === 1) {
//         alert('Your order placed successfully!!');
//         dispatch(clearCartItem());
//       } else if((response.status === 2) ) {
//         // Handle error here
//         alert('Your order is preparing!!');
//       }
//       else if((response.status === 3) ) {
//         // Handle error here
//         alert('Your order is ready!!');
//       }
//       else if((response.status === 4) ) {
//         // Handle error here
//         alert('Your order is delivered!!');
//       }
//       else{
//         alert('Your order is cancelled!!');
//       }
//     }
//          catch (error) {
//       console.error('Error occurred while placing the order', error);
//     }
// }
  }



const customerController = {getDishes,getCategories,getAllOrders};

export default customerController;












