import React from 'react';
import logo from '../../logo.png';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
}
    from 'mdb-react-ui-kit';

function AdminLogin() {
    return (
        <MDBContainer fluid>
            <MDBRow>

                <MDBCol sm='6' className="d-flex flex-column justify-content-center vh-100">

                    <div className='d-flex flex-row  h-25 d-inline-block'>

                        <img src={logo}/>
                    </div>

                    <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

                        <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
                        <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

                        <MDBBtn className="mb-4 px-5 mx-5 w-100" color='black' size='lg'>Login</MDBBtn>
                        <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>


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

export default AdminLogin;
