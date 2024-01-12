import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import profile from '../../../images/profile.png';
import bg4 from '../../../images/bg11.jpg';
import Footer from '../footer/footer';
import Header from '../Header/Header';
import customerController from '../../../services/customer/customerServices';
import {useNavigate} from "react-router-dom";

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

const ProfileContent = () => (
  <div>
    <h2>Profile Content</h2>
  </div>
);

const OrderHistoryContent = ({ allOrders }) => (
  <div>
    <MainImage>
      <CardImage>
        {allOrders.map((ele) => (
          <Perslide key={ele._id}>
            <p>{ele.status}</p>
            <span style={{ display: 'block' }}>₹{ele.total}</span>
          </Perslide>
        ))}
      </CardImage>
    </MainImage>
  </div>
);

const AddressContent = () => (
  <Address>
    <p>123 Main St, City, Country</p>
  </Address>
);

const Profile = () => {
  const navigateTo = useNavigate();

  const [selectedOption, setSelectedOption] = useState('profile');
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
        navigateTo('/login');
        return;
    }
    getAllOrders();
  }, []);

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
      <Header />
      <LargeContainer>
        <TopSection>
          <ProfilePhoto src={profile} alt="Profile" />
          <ProfileName>JohnDoe</ProfileName>
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
              <SidebarOption
                selected={selectedOption === 'address' || selectedOption === 'editAddress'}
                onClick={() => handleOptionClick('address')}
              >
                Address
              </SidebarOption>
            </Sidebar>

            <Content>
              {selectedOption === 'profile' && <ProfileContent />}
              {selectedOption === 'orderHistory' && <OrderHistoryContent allOrders={allOrders} />}
              {selectedOption === 'address' && <AddressContent />}
            </Content>
          </BottomSection>
        </Container>
      </LargeContainer>
      <Footer />
    </>
  );
};

export default Profile;
