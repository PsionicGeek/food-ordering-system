import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import profile from '../../../images/profile.png';
import bg4 from '../../../images/bg11.jpg';
import customerController from '../../../services/customer/customerServices';
import {useNavigate} from "react-router-dom";
import {Box, Stack, Tab, Tabs, Typography} from "@mui/material";
import PropTypes from "prop-types";

const LargeContainer = styled.div`
 
`;

const Container = styled.div`
  display: flex;

  margin: 0 ;
  height: 50vh;
`;

const TopSection = styled.div`
  flex: 1;
  
  background: url(${bg4});
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: 90vw;
`;

const ProfilePhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const ProfileName = styled.h2`
  margin: 0;
  font-size: 2em;
  color: #fff;
`;

const BottomSection = styled.div`
  flex: 1;
  display: flex;
`;



const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;



const ProfileContent = ({userData}) => {
    return(
        <div>
            <h2>Profile</h2>
            <div>
                <p>Name: {userData.username}</p>
                <p>Email: {userData.email}</p>
                <p>Phone: {userData.mobileNumber}</p>
                <p>Address: {userData.address}</p>
            </div>

        </div>)
};



const Profile = () => {
    const navigateTo = useNavigate();

    const [selectedOption, setSelectedOption] = useState('profile');
    const [allOrders, setAllOrders] = useState([]);
    const [username, setUsername] = React.useState("");
    const [userDetails, setUserDetails] = React.useState({});

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigateTo('/login');
            return;
        }
        const user = localStorage.getItem("user");
        console.log(JSON.parse(user))
        setUsername(JSON.parse(user).username);
        getUserDetails();
    }, []);
    const getUserDetails = () => {
        customerController.getUserDetails().then((data) => {
            console.log(data);
            setUserDetails(data);
            setAllOrders(data.orders)
        }).catch((err) => {
            console.log(err);
            alert("Something went wrong")
            navigateTo('/login')
        });
    }


    return (
        <div style={{


        }}>

            <LargeContainer>
                <TopSection style={{padding:"20px"}}>
                    <div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                        }}>
                            <ProfilePhoto src={profile} alt="Profile"/>
                        </div>
                        <ProfileName>{username}</ProfileName>
                    </div>
                </TopSection>
                <Container>
                    <BottomSection>


                        <Content style={{overflowY:'scroll',    display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',}}>
                           <ProfileContent userData={userDetails}/>

                        </Content>
                    </BottomSection>
                </Container>
            </LargeContainer>

        </div>
    );
};

export default Profile;


function CustomTabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

