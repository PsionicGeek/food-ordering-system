import React from 'react';
import logo from '../../../logo.png';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';
import {useNavigate} from "react-router-dom";
import customerServices from "../../../services/customer/customerServices";

function SignUp() {

    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    // "username": username,
    //     "mobileNumber": mobileNumber,
    //     "email": email,
    //     "password": password,
    //     "address": address
    const [username, setUsername] = React.useState('');
    const [mobileNumber, setMobileNumber] = React.useState('');
    const [address, setAddress] = React.useState('');

    const onSignup= ()=>{

            const add=address.split(',');
            customerServices.signup(username,mobileNumber,email,password,add).then((data)=>{
                console.log(data);
                if(data){
                    alert('Successfully registered');
                    navigate('/login');
                }

            }).catch((er)=>{
                alert("Something Went wrong")
                return;
            })



    }
    return (
        <MDBContainer fluid>
            <MDBRow>

                <MDBCol sm='6' className="d-flex flex-column justify-content-center vh-100">

                    <div className='d-flex flex-row  h-25 d-inline-block'>

                        <img src={logo}/>
                    </div>

                    <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

                        <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Sign Up</h3>
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Name' id='name' type='text' size="lg" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='email' type='email' size="lg" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='password' type='password' size="lg" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Mobile' id='number' type='number' size="lg" value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Address' id='address' type='text' size="lg" value={address} onChange={(e)=>setAddress(e.target.value)}/>

                        <MDBBtn className="mb-4 px-5 mx-5 w-100" color='black' size='lg' onClick={onSignup}>Register</MDBBtn>
                        <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="/login">Login?</a></p>


                    </div>

                </MDBCol>

                <MDBCol sm='6' className='d-none d-sm-block px-0'>
                    <img src="https://wallpapers.com/images/high/exquisite-culinary-delight-a-delectable-table-spread-yet-artistic-introduction-to-haute-cuisine-0o0n28p7g6oqi9g1.webp"
                         alt="Login image" className="w-100 vh-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default SignUp;
