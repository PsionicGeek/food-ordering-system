
//localhost:8000/user/signin
// req body {
//{
//     "email":"ravi@gmail.com",
//     "password":"123456"
// }
//response{
//{"id":"659f8f7744dd5dd23fc828e1","email":"ravi@gmail.com","address":["White House","Lucknow"],"isAdmin":true,"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWY4Zjc3NDRkZDVkZDIzZmM4MjhlMSIsImVtYWlsIjoicmF2aUBnbWFpbC5jb20iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE3MDQ5NjM0NzUsImV4cCI6MTcwODQxOTQ3NX0.utcIImsCqMXeJT-pFKY8YX6uj8tiJ0rnbTBhFkA1oYI"}

import axios from "axios";
import {useNavigate} from "react-router-dom";
import api from "../../constants";




function onLogin({email, password}){
    const userObject = {
        "email": email,
        "password": password
    }
    var data = axios.post(`${api}/user/signin`, userObject, {headers: {'Content-Type': 'application/json'}})
    .then((res)=>{
        console.log(res.data)
        if(res.data.msg){
            alert(res.data.msg)
            return null;
        }
        else{
            localStorage.setItem('user', JSON.stringify(res.data))
            return res.data;
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    return data;

}

// ROUTE = GET : http://localhost:8000/admin/getEarning
// REQ BODY = nothing
// RESPONSE
// {
//     "totalEarning": 3870
// }

function getEarning(){
    const data = axios.get(`${api}/admin/getEarning`, {headers: {'Content-Type': 'application/json'}})
    .then((res)=>{
        console.log(res.data)
        return res.data;
    })
    .catch((err)=>{
        console.log(err)
    })
    return data;
}
//GET = http://localhost:8000/admin/getCategories
//
// REQ-BODY = nothing
// RESPONSE
//  [
//     {
//         "_id": "659f8d0d3ae8c8ff35dea252",
//         "name": "Indian",
//         "description": "Indian cuisine is a vibrant tapestry of flavors and aromas, featuring aromatic spices, diverse regional specialties, and a rich history. Experience the delightful symphony of taste in every dish.",
//         "image": "https://as2.ftcdn.net/v2/jpg/01/80/22/63/1000_F_180226311_PxBp4bH5iGK4p9fAavC6rxGUkbehvkSB.jpg",
//         "deleted_at": null,
//         "created_at": "2024-01-11T06:39:09.522Z",
//         "updated_at": "2024-01-11T06:39:09.523Z",
//         "__v": 0
//     },
//
// {
//     "_id": "659f8d0d3ae8c8ff35dea253",
//     "name": "Chinese",
//     "description": "Chinese cuisine, with its bold flavors, diverse regional styles, and artful balance of textures, is a culinary adventure. From savory dim sum to aromatic stir-fries, it captivates taste buds worldwide.",
//     "image": "https://www.cookerru.com/wp-content/uploads/2022/09/pan-fried-noodles-main-preview.jpg",
//     "deleted_at": null,
//     "created_at": "2024-01-11T06:39:09.524Z",
//     "updated_at": "2024-01-11T06:39:09.524Z",
//     "__v": 0
// },
// {
//     "_id": "659f8d0d3ae8c8ff35dea254",
//     "name": "Mughlai",
//     "description": "Mughlai cuisine, a regal facet of Indian culinary heritage, is known for its rich, aromatic dishes. Influenced by the Mughal Empire, it features flavorful gravies, kebabs, and fragrant biryanis.",
//     "image": "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content10480.jpg",
//     "deleted_at": null,
//     "created_at": "2024-01-11T06:39:09.525Z",
//     "updated_at": "2024-01-11T06:39:09.525Z",
//     "__v": 0
// },
// {
//     "_id": "659f8d0d3ae8c8ff35dea255",
//     "name": "Canadian",
//     "description": "Canadian cuisine reflects the nation's diverse landscapes and cultural influences. Known for iconic dishes like poutine, butter tarts, and tourtière, it combines indigenous flavors with global culinary traditions.",
//     "image": "https://xyuandbeyond.com/wp-content/uploads/poutine-1.jpg",
//     "deleted_at": null,
//     "created_at": "2024-01-11T06:39:09.525Z",
//     "updated_at": "2024-01-11T06:39:09.525Z",
//     "__v": 0
// }
// ]

function getCategories(){
    const data = axios.get(`${api}/admin/getCategories`, {headers: {'Content-Type': 'application/json'}})
    .then((res)=>{
        console.log(res.data)
        return res.data;
    })
    .catch((err)=>{
        console.log(err)
    })
    return data;
}

//GET = http://localhost:8000/user/getDishes
//
// REQ-BODY = nothing
//
// RESPONSE =
// [
//     {
//         "_id": "659f97e797872ee0f7bc6b27",
//         "name": "Shahi Paneer",
//         "description": "Shahi Paneer: Creamy, royal Indian dish with succulent paneer cubes, enriched in a regal blend of spices.",
//         "image": "https://static.toiimg.com/thumb/52446409.cms?width=1200&height=900",
//         "price": 300,
//         "deleted_at": null,
//         "category": {
//             "_id": "659f8d0d3ae8c8ff35dea252",
//             "name": "Indian",
//             "description": "Indian cuisine is a vibrant tapestry of flavors and aromas, featuring aromatic spices, diverse regional specialties, and a rich history. Experience the delightful symphony of taste in every dish.",
//             "image": "https://as2.ftcdn.net/v2/jpg/01/80/22/63/1000_F_180226311_PxBp4bH5iGK4p9fAavC6rxGUkbehvkSB.jpg",
//             "deleted_at": null,
//  "created_at": "2024-01-11T06:39:09.522Z",
//             "updated_at": "2024-01-11T06:39:09.523Z",
//             "__v": 0
//         },
//         "in_stock": true,
//         "ingredients": [
//             "butter",
//             "paneer",
//             "masala"
//         ],
//         "created_at": "2024-01-11T07:25:27.040Z",
//         "updated_at": "2024-01-11T07:25:27.040Z",
//         "__v": 0
//     },
//     {
//         "_id": "659f97e797872ee0f7bc6b28",
//         "name": "Butter Nan",
//         "description": "Soft, pillowy Indian bread, butter naan delights with its golden surface and rich, indulgent taste.",
//         "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butter-naan.jpg",
//         "price": 40,
//         "deleted_at": null,
//         "category": {
//             "_id": "659f8d0d3ae8c8ff35dea252",
//             "name": "Indian",
//             "description": "Indian cuisine is a vibrant tapestry of flavors and aromas, featuring aromatic spices, diverse regional specialties, and a rich history. Experience the delightful symphony of taste in every dish.",
//             "image": "https://as2.ftcdn.net/v2/jpg/01/80/22/63/1000_F_180226311_PxBp4bH5iGK4p9fAavC6rxGUkbehvkSB.jpg",
//             "deleted_at": null,
//             "created_at": "2024-01-11T06:39:09.522Z",
//             "updated_at": "2024-01-11T06:39:09.523Z",
//             "__v": 0
//         },
//         "in_stock": true,
// "ingredients": [
//             "maida",
//             "butter"
//         ],
//         "created_at": "2024-01-11T07:25:27.042Z",
//         "updated_at": "2024-01-11T07:25:27.042Z",
//         "__v": 0
//     }
// ]

function getDishes(){
    const data = axios.get(`${api}/user/getDishes`, {headers: {'Content-Type': 'application/json'}})
    .then((res)=>{
        console.log(res.data)
        return res.data;
    })
    .catch((err)=>{
        console.log(err)
    })
    return data;
}

//GET = http://localhost:8000/admin/getOrders
//
// REQ-BODY = nothing
//
// RESPONSE  =
// [
//     {
//         "_id": "659f99deb614b882093768e7",
//         "status": 1,
//         "deleted_at": null,
//         "user": "659f8f7744dd5dd23fc828e5",
//         "total": 1500,
//         "dishes": [
//             {
//                 "dish": {
//                     "_id": "659f97e797872ee0f7bc6b27",
//                     "name": "Shahi Paneer",
//                     "description": "Shahi Paneer: Creamy, royal Indian dish with succulent paneer cubes, enriched in a regal blend of spices.",
//                     "image": "https://static.toiimg.com/thumb/52446409.cms?width=1200&height=900",
//                     "price": 300,
//                     "deleted_at": null,
//                     "category": "659f8d0d3ae8c8ff35dea252",
//                     "in_stock": true,
//                     "ingredients": [
//                         "butter",
//                         "paneer",
//                         "masala"
//                     ],
//                     "created_at": "2024-01-11T07:25:27.040Z",
//                     "updated_at": "2024-01-11T07:25:27.040Z",
//                     "__v": 0
//                 },
//                 "quantity": 2,
//                 "_id": "659f99deb614b882093768e8"
//             },
// {
//                 "dish": {
//                     "_id": "659f97e797872ee0f7bc6b28",
//                     "name": "Butter Nan",
//                     "description": "Soft, pillowy Indian bread, butter naan delights with its golden surface and rich, indulgent taste.",
//                     "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butter-naan.jpg",
//                     "price": 40,
//                     "deleted_at": null,
//                     "category": "659f8d0d3ae8c8ff35dea252",
//                     "in_stock": true,
//                     "ingredients": [
//                         "maida",
//                         "butter"
//                     ],
//                     "created_at": "2024-01-11T07:25:27.042Z",
//                     "updated_at": "2024-01-11T07:25:27.042Z",
//                     "__v": 0
//                 },
//                 "quantity": 10,
//                 "_id": "659f99deb614b882093768e9"
//             },
// {
//                 "dish": {
//                     "_id": "659f97e797872ee0f7bc6b36",
//                     "name": "Shahi Tukda Royale",
//                     "description": "Royal Mughlai Dessert",
//                     "image": "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2016/01/16/415255-shahi-tukda.jpg",
//                     "price": 250,
//                     "deleted_at": null,
//                     "category": "659f8d0d3ae8c8ff35dea254",
//                     "in_stock": true,
//                     "ingredients": [
//                         "Bread",
//                         "Milk",
//                         "Saffron"
//                     ],
//                     "created_at": "2024-01-11T07:25:27.046Z",
//                     "updated_at": "2024-01-11T07:25:27.046Z",
//                     "__v": 0
//                 },
//                 "quantity": 2,
//                 "_id": "659f99deb614b882093768ea"
//             }
//         ],
// "created_at": "2024-01-11T07:33:50.116Z",
//         "updated_at": "2024-01-11T07:33:50.116Z",
//         "__v": 0
//     }
//  ]
const getOrders = async()=>{
    const data = axios.get(`${api}/admin/getOrders`, {headers: {'Content-Type': 'application/json'}})
    .then((res)=>{
        console.log(res.data)
        return res.data;
    })
    .catch((err)=>{
        console.log(err)
    })
    return data;
}

//GET = http://localhost:8000/admin/getUsers
//[
//     {
//         "_id": "659f8f7744dd5dd23fc828df",
//         "username": "Mohak Harjani",
//         "mobileNumber": "1234567890",
//         "email": "mohakharjani@gmail.com",
//         "password": "$2b$10$q93vMLwLB3TgEas8gbd4veSX4a9YWQht908hFGRnpcOWSHF91Dn1C",
//         "address": [
//             "Shalimar Bagh",
//             "New Delhi"
//         ],
//         "isAdmin": true,
//         "orders": [
//             {
//                 "_id": "659fb17546af09ca28222a85",
//                 "status": 1,
//                 "deleted_at": null,
//                 "user": "659f8f7744dd5dd23fc828df",
//                 "total": 1500,
//                 "dishes": [
//                     {
//                         "dish": "659f97e797872ee0f7bc6b27",
//                         "quantity": 5,
//                         "_id": "659fb17546af09ca28222a86"
//                     }
//                 ],
//                 "created_at": "2024-01-11T09:14:29.933Z",
//                 "updated_at": "2024-01-11T09:14:29.933Z",
//                 "__v": 0
//             }
//         ],
//         "__v": 1
//     },
//     {
//         "_id": "659f8f7744dd5dd23fc828e0",
//         "username": "Himanshu",
//         "mobileNumber": "2345678901",
//         "email": "himanshu@gmail.com",
//         "password": "$2b$10$Dr2g2xibfSG5VAFpEkOipO7R24ZVBCVN61sboA8LnjR/f0fRwdLZq",
//         "address": [
//             "Rajouri Garden",
//             "New Delhi"
//         ],
//         "isAdmin": true,
//         "orders": [],
//         "__v": 0
//     },
//     {
//         "_id": "659f8f7744dd5dd23fc828e1",
//         "username": "Ravi Singh",
//         "mobileNumber": "3456789012",
//         "email": "ravi@gmail.com",
//         "password": "$2b$10$ucF7mK8w9VJMrpUSodcDQOwyIGwXbf8Ij3rnGrENa976oHxJSimW2",
//         "address": [
//             "White House",
//             "Lucknow"
//         ],
//         "isAdmin": true,
//         "orders": [],
//         "__v": 0
//     },
//     {
//         "_id": "659f8f7744dd5dd23fc828e2",
//         "username": "Divyanshu",
//         "mobileNumber": "4567890123",
//         "email": "divyanshu@gmail.com",
//         "password": "$2b$10$Ve5DBIzWXRdAOR0s6eRO4uu4uoxo9TZYjTlUOSo9r4FnpavfiK4GW",
//         "address": [
//             "Moti Bagh",
//             "Delhi"
//         ],
//         "isAdmin": true,
//         "orders": [],
//         "__v": 0
//     },
//     {
//         "_id": "659f8f7744dd5dd23fc828e3",
//         "username": "Garima Mittal",
//         "mobileNumber": "5678901234",
//         "email": "garima@gmail.com",
//         "password": "$2b$10$Rwum0nHIUOQu4SBA3O7XEOnf0jWYyQ6GALcYti7XY.kGmDU80eFee",
//         "address": [
//             "Sector 23",
//             "Gurugram"
//         ],
//         "isAdmin": true,
//         "orders": [],
//         "__v": 0
//     },
//     {
//         "_id": "659f8f7744dd5dd23fc828e4",
//         "username": "Virat Kohli",
//         "mobileNumber": "6789012345",
//         "email": "virat@gmail.com",
//         "password": "$2b$10$DfmNMmXVY3S6MLIll7aUveUHZQjGQ9YhwejUx0xCOsRUtNApapvt2",
//         "address": [
//             "Near Ram chole bhature",
//             "Delhi"
//         ],
//         "isAdmin": false,
//         "orders": [
//             {
//                 "_id": "659f9a91b614b882093768f9",
//                 "status": 1,
//                 "deleted_at": null,
//                 "user": "659f8f7744dd5dd23fc828e4",
//                 "total": 3900,
//                 "dishes": [
//                     {
//                         "dish": "659f97e797872ee0f7bc6b2f",
//                         "quantity": 2,
//                         "_id": "659f9a91b614b882093768fa"
//                     },
//                     {
//                         "dish": "659f97e797872ee0f7bc6b33",
//                         "quantity": 2,
//                         "_id": "659f9a91b614b882093768fb"
//                     },
//                     {
//                         "dish": "659f97e797872ee0f7bc6b2a",
//                         "quantity": 3,
//                         "_id": "659f9a91b614b882093768fc"
//                     }
//                 ],
//                 "created_at": "2024-01-11T07:36:49.331Z",
//                 "updated_at": "2024-01-11T07:36:49.331Z",
//                 "__v": 0
//             }
//         ],
//         "__v": 1
//     },
//     {
//         "_id": "659f8f7744dd5dd23fc828e5",
//         "username": "Dhoni",
//         "mobileNumber": "7890123456",
//         "email": "rohit@gmail.com",
//         "password": "123456789",
//         "address": [
//             "Ranchi"
//         ],
//         "isAdmin": false,
//         "orders": [
//             {
//                 "_id": "659f99deb614b882093768e7",
//                 "status": 1,
//                 "deleted_at": null,
//                 "user": "659f8f7744dd5dd23fc828e5",
//                 "total": 1500,
//                 "dishes": [
//                     {
//                         "dish": "659f97e797872ee0f7bc6b27",
//                         "quantity": 2,
//                         "_id": "659f99deb614b882093768e8"
//                     },
//                     {
//                         "dish": "659f97e797872ee0f7bc6b28",
//                         "quantity": 10,
//                         "_id": "659f99deb614b882093768e9"
//                     },
//                     {
//                         "dish": "659f97e797872ee0f7bc6b36",
//                         "quantity": 2,
//                         "_id": "659f99deb614b882093768ea"
//                     }
//                 ],
//                 "created_at": "2024-01-11T07:33:50.116Z",
//                 "updated_at": "2024-01-11T07:33:50.116Z",
//                 "__v": 0
//             }
//         ],
//         "__v": 2
//     },
//     {
//         "_id": "659fb88c85b4224c34a31955",
//         "username": "Shikhar Dhawan",
//         "mobileNumber": "9811008812",
//         "email": "shikhi@gmail.com",
//         "password": "$2b$10$A6MYwJYEPe8Dii2wLqWY.eKazfXOkqfG./fAyb19Rqrk9fjNEv3YC",
//         "address": [
//             "Punjabi Bagh",
//             "Delhi"
//         ],
//         "isAdmin": false,
//         "orders": [],
//         "__v": 0
//     },
//     {
//         "_id": "659fcf2fc98d66f6c1fb826f",
//         "username": "himanshu",
//         "mobileNumber": "9876543211",
//         "email": "him@gmail.com",
//         "password": "$2b$10$sRa2a.vczJwl9H8ubW0/BeQ9ilmHcIAdWdtmFMa7amHi/fe18pJVy",
//         "address": [
//             "[VWITS][grgm]"
//         ],
//         "isAdmin": false,
//         "orders": [],
//         "__v": 0
//     },
//     {
//         "_id": "659fdfcc3c4aadc9cff5a9db",
//         "username": "Sakshi",
//         "mobileNumber": "9999222200",
//         "email": "sakshi@gmail.com",
//         "password": "$2b$10$KXjBRte1.XegK5xcuDZjB.vMnV/h3.g82EZOcY6pX1G/SVixoQQmO",
//         "address": [
//             "Ludhiana, Punjab"
//         ],
//         "isAdmin": false,
//         "orders": [
//             {
//                 "_id": "659fe0c63c4aadc9cff5a9e4",
//                 "status": 1,
//                 "deleted_at": null,
//                 "user": "659fdfcc3c4aadc9cff5a9db",
//                 "total": 1000,
//                 "dishes": [
//                     {
//                         "dish": "659f97e797872ee0f7bc6b2f",
//                         "quantity": 2,
//                         "_id": "659fe0c63c4aadc9cff5a9e5"
//                     }
//                 ],
//                 "created_at": "2024-01-11T12:36:22.312Z",
//                 "updated_at": "2024-01-11T12:36:22.312Z",
//                 "__v": 0
//             }
//         ],
//         "__v": 1
//     }
// ]
const getUsers = async()=>{
    const data = axios.get(`${api}/admin/getUsers`, {headers: {'Content-Type': 'application/json'}})
        .then((res)=>{
        // console.log(res.data)
        return res.data;
    }).catch((err)=>{
        console.log(err)
    })
    return data;
}
//POST : http://localhost:8000/admin/addCategory
// REQ BODY
// {
//   "name": "Chinese",
//   "description": "China mei banta hai",
//   "image": "www.temp.jpg"
// }
//
// RESPONSE
// {
//     "name": "Chinese",
//     "description": "China mei banta hai",
//     "image": "www.temp.jpg",
//     "deleted_at": null,
//     "_id": "659e91d5610c81bc4cb93a20",
//     "created_at": "2024-01-10T12:47:17.109Z",
//     "updated_at": "2024-01-10T12:47:17.109Z",
//     "__v": 0
// }

const addCategory = async (category)=>{
const data = axios.post(`${api}/admin/addCategory`, category, {headers: {'Content-Type': 'application/json'}})
        .then((res)=>{
        console.log(res.data)
        return res.data;
    }).catch((err)=>{
        console.log(err)
    })
    return data;
}

//POST : http://localhost:8000/admin/addDish
// REQ BODY
// {
//   "name": "Chole Bhature",
//   "description": "Chole with Bhature",
//   "image": "www.btck.jpg",
//   "price": 90,
//   "category_name": "Main course",
//   "ingredients": [
//     "Chole",
//     "Bhature"
//   ]
// }

const addDish = async (dish)=>{
const data = axios.post(`${api}/admin/addDish`, dish, {headers: {'Content-Type': 'application/json'}})
        .then((res)=>{
        console.log(res.data)
        return res.data;
    }).catch((err)=>{
        console.log(err)
    })
    return data;
}

//PUT : http://localhost:8000/admin/updateStatus/:orderId/:status
const updateStatus = async (orderId, status)=>{
const data = axios.put(`${api}/admin/updateStatus/${orderId}/${status}`, {}, {headers: {'Content-Type': 'application/json'}})
        .then((res)=>{
        console.log(res.data)
        return res.data;
    }).catch((err)=>{
        throw err;
    })
    return data;
}

//DELETE : http://localhost:8000/admin/deleteDish/:dishId
const deleteDish = async (dishId)=>{
const data = axios.delete(`${api}/admin/deleteDish/${dishId}`, {headers: {'Content-Type': 'application/json'}})
        .then((res)=>{

        console.log(res.data)
        return res.data;
    }).catch((err)=>{
        throw err;
    })
    return data;
}
const adminServices = { onLogin,getEarning,getCategories, getDishes,getOrders, getUsers,addCategory,addDish,updateStatus,deleteDish};
export default adminServices;
