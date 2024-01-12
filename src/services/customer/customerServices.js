
import axios from "axios";
import header from "../../component/customer/Header/Header";
import api from "../../constants";

function getDishes(){
    const data = axios.get(`${api}/user/getDishes`)
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
    const data = axios.get(`${api}/admin/getCategories`)
        .then((res)=>{
            console.log(res.data)
            return res.data;
        })
        .catch((err)=>{
            console.log(err)
        })
    return data;
}

//POST :  http://localhost:8000/user/signup
//
// REQ_BODY  =
// {
//   "username": "Shikhar Dhawan",
//   "mobileNumber": "9811008812",
//   "email": "shikhi@gmail.com",
//   "password": "123",
//   "address": [
//     "Punjabi Bagh",
//     "Delhi"
//   ]
// }
//

const signup = async (username, mobileNumber, email, password, address) => {
    const data = await axios.post(`${api}/user/signup`, {
        "username": username,
        "mobileNumber": mobileNumber,
        "email": email,
        "password": password,
        "address": address
    }, {headers: {'Content-Type': 'application/json'}}).then((res) => {
        console.log(res.data)
        return res.data;
    }).catch((err) => {
        console.log(err)
        throw err;
    });
    console.log(data);
    return data;
}
function getAllOrders(){
    const data = axios.get(`${api}/user/allOrders/659f8f7744dd5dd23fc828e5`)
        .then((res)=>{
            console.log(res.data)
            return res.data;
        })
        .catch((err)=>{
            console.log(err)
        })
    return data;
}
// http://localhost:8000/user/bookOrder
// REQ-BODY :   [VERY IMPORTANT]
// dishList is a list of objects….
// Each object in dishList is of form { id, quantity}  //here id = dishId
// {
//   "user_id": "659e2219a02273409ab01bcb",
//   "dishList": [
//     {
//       "id": "659e20bfa02273409ab01bc2",
//       "quantity": 5
//     },
//     {
//       "id": "659e8ca5d0dc7a4b710839bf",
//       "quantity": 6
//     }
//   ]
// }

async function order(cartItems) {
    const user_id=localStorage.getItem('userId');
    const token=localStorage.getItem('token');
    console.log(user_id)
    console.log(cartItems)
    console.log(token)
    const data= await axios.post(`${api}/user/bookOrder`, {
        user_id: user_id, // Replace with the actual user ID
        dishList: cartItems,
    },{headers:{'Authorization':`Bearer ${token}`, 'Content-Type': 'application/json'}});
    console.log(data);
    return data;
}

// GET : http://localhost:8000/user/userDetails/659f8f7744dd5dd23fc828e4
//
//  http://localhost:8000/user/userDetails/{user_id}
//
// REQ-BODY = nothing
//
// RESPONSE =  //details of users with orders and dishes inside oders populated (can directly use any property of order or dish)
// {
//     "_id": "659f8f7744dd5dd23fc828e4",
//     "username": "Virat Kohli",
//     "mobileNumber": "6789012345",
//     "email": "virat@gmail.com",
//     "password": "$2b$10$DfmNMmXVY3S6MLIll7aUveUHZQjGQ9YhwejUx0xCOsRUtNApapvt2",
//     "address": [
//         "Near Ram chole bhature",
//         "Delhi"
//     ],
//     "isAdmin": false,
//     "orders": [
//         {
//             "_id": "659f9a91b614b882093768f9",
//             "status": 1,
//             "deleted_at": null,
//             "user": "659f8f7744dd5dd23fc828e4",
//             "total": 3900,
//             "dishes": [
//                 {
//                     "dish": {
//                         "_id": "659f97e797872ee0f7bc6b2f",
//                         "name": "Poutine Supreme",
//                         "description": "Classic Canadian Comfort Food",
//                         "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnNsRLVFUSMaqO-vJvUOOcGZy7nuPiSHsw0vJ50R62eoNMF9l4xqifu7NiXU_0Pv60Ee8&usqp=CAU",
//                         "price": 500,
//                         "deleted_at": null,
//     "category": "659f8d0d3ae8c8ff35dea255",
//                         "in_stock": true,
//                         "ingredients": [
//                             "French Fries",
//                             "Cheese Curds",
//                             "Gravy"
//                         ],
//                         "created_at": "2024-01-11T07:25:27.045Z",
//                         "updated_at": "2024-01-11T07:25:27.045Z",
//                         "__v": 0
//                     },
//                     "quantity": 2,
//                     "_id": "659f9a91b614b882093768fa"
//                 },
//                 {
//                     "dish": {
//                         "_id": "659f97e797872ee0f7bc6b33",
//                         "name": "Mughlai Biryani",
//                         "description": "Flavorful Mughlai Rice Dish",
//                         "image": "https://www.licious.in/blog/wp-content/uploads/2019/11/Mutton-Biryani-1-1024x1024.jpg",
//                         "price": 550,
//                         "deleted_at": null,
//                         "category": "659f8d0d3ae8c8ff35dea254",
//                         "in_stock": true,
//                         "ingredients": [
//                             "Basmati Rice",
//                             "Chicken",
//                             "Saffron"
//                         ],
//                         "created_at": "2024-01-11T07:25:27.046Z",
//                         "updated_at": "2024-01-11T07:25:27.046Z",
//       "__v": 0
//                     },
//                     "quantity": 2,
//                     "_id": "659f9a91b614b882093768fb"
//                 },
//                 {
//                     "dish": {
//                         "_id": "659f97e797872ee0f7bc6b2a",
//                         "name": "Gajar Ka Halwa",
//                         "description": "Gajar ka Halwa: Indian dessert bliss with grated carrots, ghee, sugar, and nuts, offering sweet, aromatic indulgence.",
//                         "image": "https://feastwithsafiya.com/wp-content/uploads/2021/10/gajar-ka-halwa.jpg",
//                         "price": 600,
//                         "deleted_at": null,
//                         "category": "659f8d0d3ae8c8ff35dea252",
//                         "in_stock": true,
//                         "ingredients": [
//                             "carrot",
//                             "khoya",
//                             "milk"
//                         ],
//                         "created_at": "2024-01-11T07:25:27.042Z",
//                         "updated_at": "2024-01-11T07:25:27.042Z",
//                         "__v": 0
//                     },
//                     "quantity": 3,
//                     "_id": "659f9a91b614b882093768fc"
//                 }
//             ],
//             "created_at": "2024-01-11T07:36:49.331Z",
//             "updated_at": "2024-01-11T07:36:49.331Z",
//      "__v": 0
//         }
//     ],
//     "__v": 1
// }

const getUserDetails=()=>{
    const userId=localStorage.getItem('userId');
    const token=localStorage.getItem('token');
    console.log(userId)
    console.log(token)
    const data=axios.get(`${api}/user/userDetails/${userId}`,{headers:{'Authorization':`Bearer ${token}`}}).then((res)=>{
        console.log(res.data)
        return res.data;
    });
    console.log(data);
    return data;
}
const logout=()=>{
   localStorage.clear();

}


const customerController = {getDishes,getCategories,getAllOrders,order,getUserDetails,signup,logout};

export default customerController;
