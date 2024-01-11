
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


function onLogin({email, password}){
    const userObject = {
        "email": email,
        "password": password
    }
    var data = axios.post('http://localhost:8000/user/signin', userObject, {headers: {'Content-Type': 'application/json'},withCredentials:true})
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
    const data = axios.get('http://localhost:8000/admin/getEarning', {headers: {'Content-Type': 'application/json'}})
    .then((res)=>{
        console.log(res.data)
        return res.data;
    })
    .catch((err)=>{
        console.log(err)
    })
    return data;
}


const adminServices = { onLogin,getEarning };
export default adminServices;
