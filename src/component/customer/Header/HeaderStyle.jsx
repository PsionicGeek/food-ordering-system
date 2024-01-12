import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
    align-items: center;
  padding: 10px 0 0 0;
  margin-bottom: 10px;
  background-color: #e9eaec;
  position: sticky;
  top: 0;
  z-index: 999;
`;


export const Logo = styled.img`
  width: 80px;
  height: 60px;
  margin-right: 60px;
  margin-bottom: 6px;
  margin-top: -10px;
    cursor: pointer;
`;

export const SearchInput = styled.input`
  width: 200px;
  height: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 10px;
  outline-style: none;
  border: none;
  padding: 20px;
`;

export const SearchButton = styled.button`
  height: 40px;
  width: 130px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: -2px;
  border: none;
  margin-right: 60px;
  background-color: black;
  color: #fff;
`;

export const Navbar = styled.ul`
  list-style: none;
  float: left;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const NavbarItem = styled.li`
  margin: 0;
  padding: 10px;
  float: left;
  margin-right: 10px;
`;
export const CartItem = styled.div`
 position:relative;

`;

export const CartImage = styled.img`
  width: 30px;
  height: 30px;
 
`;

export const Message = styled.span`
  background-color: black;
  color: white;
  width: 25px;
  height: 25px;
  position: absolute;
  margin-top: -5px;
  margin-left: -30px;
  border-radius: 10px;
  text-align: center;
`;
