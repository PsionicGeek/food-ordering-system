import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import profile from '../../../images/profile.png';
import bg4 from '../../../images/bg11.jpg';
import Footer from '../footer/footer';
import Header from '../Header/Header';
import customerController from '../../../services/customer/customerServices';
import {useNavigate} from "react-router-dom";
import {Box, Stack, Tab, Tabs, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {MDBBtn, MDBTable, MDBTableBody, MDBTableHead} from "mdb-react-ui-kit";
import PropTypes from "prop-types";

const LargeContainer = styled.div`
  margin-left: 20%;
  margin-right: 20%;
`;

const Container = styled.div`
  display: flex;
  min-width: 700px;
  margin: 0 auto;
  height: 50vh;
`;

const TopSection = styled.div`
  flex: 1;
  padding: 20px;
  background: url(${bg4});
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: 100%;
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

const Sidebar = styled.div`
  width: 200px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

const SidebarOption = styled.div`
  padding: 15px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  transition: background-color 0.3s;
  background-color: #fff;

  &:hover {
    background-color: black;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fff;
`;

const Address = styled.div`
  height: 180px;
  width: 230px;
  border-radius: 10px;
  box-shadow: 1px 2px 5px black;
`;

const MainImage = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px;
`;

const CardImage = styled.div`
  display: flex;
`;

const Perslide = styled.div`
  flex: 0 0 auto;
  margin-right: 10px;
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

const OrderHistoryContent = ({ allOrders }) => {
  const [value, setValue] = React.useState(0);

    const [orders, setOrders] = useState([]);
    useEffect(() => {
      console.log(allOrders);
      setOrders(allOrders);
    },[]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return( <div>


          <Stack spacing={3}>
            <Stack
                direction="row"
                justifyContent="space-between"
                spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4" paddingLeft={0}>
                  Orders
                </Typography>

              </Stack>

            </Stack>
            <Box sx={{width: '100%'}} paddingLeft={0} paddingRight={15}>
              <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Pending" {...a11yProps(0)} />
                  <Tab label="Completed" {...a11yProps(1)} />
                  <Tab label="Cancelled" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel  value={value} index={0}>
                <div style={{justifyContent: 'center', display: 'flex'}}>

                  <div style={{height: 600, width: 700, overflowX:'scroll', overflowY:"scroll"}}>

                    <MDBTable align='middle'>
                      <MDBTableHead>
                        <tr>
                          <th scope='col'>Id</th>

                          <th scope='col'>Date & Time</th>
                          <th scope='col'>Price</th>
                          <th scope='col'>Dishes</th>
                          <th scope='col'>Status</th>


                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>

                        {orders.map((order) => (

                            order.status == 1 || order.status == 2 || order.status == 3 ? <tr>
                              <td>
                                <div className='d-flex align-items-center'>

                                  <div className='ms-3'>
                                    <p className='fw-bold mb-1'>{order._id}</p>

                                  </div>
                                </div>
                              </td>

                              <td>
                                <p className='fw-normal mb-1'>{order.created_at}</p>

                              </td>
                              <td>
                                <p className='fw-normal mb-1'>{order.total}</p>

                              </td>
                              <td>
                                <p className='fw-normal mb-1'>{order.dishes.map((d) => {
                                  return (
                                      <div>
                                        <p className='fw-normal mb-1'>{d.dish.name + ' x '
                                            + d.quantity}</p>
                                      </div>
                                  )
                                })}</p>

                              </td>

                              <td>{order.status == 1 ? 'Pending' : order.status == 2 ? 'In Progress' : 'Ready'}</td>

                            </tr> : null
                        ))}

                      </MDBTableBody>
                    </MDBTable>

                  </div>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <div style={{justifyContent: 'center', display: 'flex'}}>

                  <div style={{height: 600, width: 700, overflowX:'scroll', overflowY:"scroll"}}>

                    <MDBTable align='middle'>
                      <MDBTableHead>
                        <tr>
                          <th scope='col'>Id</th>

                          <th scope='col'>Date & Time</th>
                          <th scope='col'>Price</th>
                          <th scope='col'>Dishes</th>
                          <th scope='col'>Status</th>

                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>

                        {orders.map((order) => (

                            order.status == 4 ? <tr>
                              <td>
                                <div className='d-flex align-items-center'>

                                  <div className='ms-3'>
                                    <p className='fw-bold mb-1'>{order._id}</p>

                                  </div>
                                </div>
                              </td>

                              <td>
                                <p className='fw-normal mb-1'>{order.created_at}</p>

                              </td>
                              <td>
                                <p className='fw-normal mb-1'>{order.total}</p>

                              </td>
                              <td>
                                <p className='fw-normal mb-1'>{order.dishes.map((d) => {
                                  return (
                                      <div>
                                        <p className='fw-normal mb-1'>{d.dish.name + ' x '
                                            + d.quantity}</p>
                                      </div>
                                  )
                                })}</p>

                              </td>

                              <td>Delivered</td>

                            </tr> : null
                        ))}

                      </MDBTableBody>
                    </MDBTable>

                  </div>
                </div>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <div style={{justifyContent: 'center', display: 'flex'}}>

                  <div style={{height: 600, width: 700, overflowX:'scroll', overflowY:"scroll"}}>

                    <MDBTable align='middle'>
                      <MDBTableHead>
                        <tr>
                          <th scope='col'>Id</th>

                          <th scope='col'>Date & Time</th>
                          <th scope='col'>Price</th>
                          <th scope='col'>Dishes</th>
                          <th scope='col'>Status</th>

                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>

                        {orders.map((order) => (

                            order.status == 5 ? <tr>
                              <td>
                                <div className='d-flex align-items-center'>

                                  <div className='ms-3'>
                                    <p className='fw-bold mb-1'>{order.id}</p>

                                  </div>
                                </div>
                              </td>

                              <td>
                                <p className='fw-normal mb-1'>{order.created_at}</p>

                              </td>
                              <td>
                                <p className='fw-normal mb-1'>{order.total}</p>

                              </td>
                              <td>
                                <p className='fw-normal mb-1'>{order.dishes.map((dish) => {
                                  return (
                                      <div>
                                        <p className='fw-normal mb-1'>{dish.dish_id + ' x ' + dish.quantity}</p>
                                      </div>
                                  )
                                })}</p>

                              </td>

                              <td>Cancelled</td>

                            </tr> : null
                        ))}

                      </MDBTableBody>
                    </MDBTable>

                  </div>
                </div>
              </CustomTabPanel>
            </Box>

          </Stack>


    </div>
)};

const AddressContent = () => (
    <Address>
      <p>123 Main St, City, Country</p>
    </Address>
);

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
  const getAllOrders = () => {
    customerController.getAllOrders().then((data) => {
      console.log(data);
      setAllOrders(data);
    });
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
      <>
        <Header/>
        <LargeContainer>
          <TopSection>
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
              <Sidebar>
                <SidebarOption
                    selected={selectedOption === 'profile'}
                    onClick={() => handleOptionClick('profile')}
                >
                  Profile
                </SidebarOption>
                <SidebarOption
                    selected={selectedOption === 'orderHistory'}
                    onClick={() => handleOptionClick('orderHistory')}
                >
                  Order History
                </SidebarOption>

              </Sidebar>

              <Content style={{overflowY:'scroll'}}>
                {selectedOption === 'profile' && <ProfileContent userData={userDetails}/>}
                {selectedOption === 'orderHistory' && <OrderHistoryContent allOrders={allOrders}/>}

              </Content>
            </BottomSection>
          </Container>
        </LargeContainer>
        <Footer/>
      </>
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
