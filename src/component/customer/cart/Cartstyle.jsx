import styled from 'styled-components';

export const CartBackground = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  height: 100%;
  
`;

export const CartContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.323);
  color: black;
  margin: 10px 60px;
  padding: 30px;
  border-radius: 10px;
    height: 55vh;
    overflow-y: scroll;
`;

export const CartMain = styled.div`
  padding: 10px;
`;


export const CartMainBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 1px 2px 5px black;
`;

export const CartMainBodyDiv = styled.div`
  width: 250px;
  display: flex;

`;

export const CartMainBodyButton = styled.button`
  border: 1px solid chocolate;
  background-color: transparent;
  border-radius: 10px;
  color: chocolate;


  &:hover {
    background-color: chocolate;
    color: white;
    box-shadow: 2px 3px 4px black;
  }
`;

export const CartMainBodyDiv2 = styled.div`
  width: 100px;
  margin-top:10px;
`;

export const CartMainBodyImage = styled.img`
  height: 80px;
  width: 100px;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 5px black;
  }
`;

export const CartMainBodyH3 = styled.h3`
  width: 200px;
`;

export const QuantityButton = styled.button`
  border: none;
  width: 24px;
  height: 20px;
  margin-top:10px;
 
`;

export const ClearCartButton = styled.button`
  padding: 5px;
  border: 1px solid rgb(182, 104, 21);
  border-radius: 5px;
`;

export const OrderButton = styled.button`
  width: 117px;
  height: 34px;
  border: none;
  background-color: rgba(0, 0, 0, 0.671);
  color: white;
  border-radius: 10px;
  margin-left: 60px;

  &:hover {
    box-shadow: 2px 2px 5px black;
  }

  &:active {
    background-color: chocolate;
  }
`;
