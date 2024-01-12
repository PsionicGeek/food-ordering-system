import styled from 'styled-components';
import bg2 from '../../../images/bg2.jpg'
export const IndiCss = styled.div`
  height: 100%;
  padding-bottom: 10px;
`;

export const SlideCss = styled.div`
  height: 100%;
  padding-bottom: 10px;
  background: url(${bg2});

  background-repeat: no-repeat;
  background-size: cover;
`;

export const CategoryListH2 = styled.h2`
  padding-top: 38px;
  text-align: center;
  color: rgba(0, 0, 0, 0.707);
  font-size: 35px;
`;

export const SlideCssH2 = styled.h2`
  text-align: center;
  color: rgba(0, 0, 0, 0.92);
  padding: 5px;
  margin-left: 26px;
  cursor: pointer;
  font-size: 30px;
    color: rgba(255, 255, 255, 0.9);
  font-family: Verdana, Arial, Helvetica, sans-serif;
`;

export const IndiCssH3 = styled.h3`
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  background-color: rgba(0, 0, 0, 0.927);
  color: rgba(255, 255, 255, 0.9);
  width: 200px;
  padding: 5px;
  margin-left: 26px;
  box-shadow: 1px 2px 5px black;
  cursor: pointer;
`;

export const Imsa = styled.button`
  height: 58px;
  width: 58px;
  margin-top: 300px;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: green;

  &:hover {
    background-color: rgba(1, 107, 1, 0.3);
    color: white;
  }
`;

export const MainImage = styled.div`
  width: 1450px;
  height: 385px;
  margin: 10px auto;
  position: relative;
  
    
`;

export const CardImage = styled.div`
  width: 100%;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export const AllDishCard = styled.div`
  display: flex;
  flex-direction: row;
    align-content: center;
    align-items: center;
  justify-content: space-evenly;
  width: 1400px;
  flex-wrap: wrap;
  padding: 15px;
`;

// ... Previous styled components

export const Perslide = styled.div`
  min-width: 250px;
  height: 300px;
  padding: 20px;
  background-color: rgba(156, 154, 154, 0.8);
  border-radius: 10px;
  margin: 20px;

  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 10px black;
  }
`;

export const PerslideImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  box-shadow: 3px 2px 5px #a8a0a0;
`;

export const QuantityButton = styled.button`
  width: 20px;
  height: 20px;
  border: none;
`;

export const RightImageArrowStyles = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  color: rgba(0, 0, 0, 0.395);
  width: 60px;
  border-radius: 50%;
  text-align: center;
  background-color: transparent;
  height: 59px;
  border: 0px;
  font-size: 25px;
  right: 0px;

  &:hover {
    background-color: rgba(230, 217, 217, 0.8);
    color: rgba(156, 154, 154, 0.8);
  }
`;

export const LeftImageArrowStyles = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 40px;
  color: rgba(0, 0, 0, 0.395);
  width: 60px;
  border-radius: 50%;
  background-color: transparent;
  text-align: center;
  height: 59px;
  border: 0px;

  &:hover {
    background-color: rgba(230, 217, 217, 0.8);
    color: rgba(156, 154, 154, 0.8);
  }
`;

export const SlideCartButton = styled.button`
  border: none;
  float: right;
  margin: 2px;
  background-color: rgba(0, 0, 0, 0.528);
  border-radius: 5px;
  color: white;
  padding: 3px 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.92);
    box-shadow: 3px 2px 5px #0c0c0c;
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.707);
  }
`;

export const BackHomeButton = styled.button`
  border: none;
  margin-left: 30px;
  background-color: rgba(0, 0, 0, 0.897);
  width: 110px;
  height: 40px;
  color: white;
  border-radius: 5px;
`;

export const CategoryList = styled.div`
  padding-bottom: 10px;
  background-color: rgba(0, 0, 0, 0.168);
  height: 100%;
    
`;

export const CategoryMain = styled.div`
  display: flex;
  justify-content: space-evenly;
    width: 100vw;
    overflow-x: scroll;
`;

export const CategoryMainImage = styled.img`
  width: 200px;
  height: 200px;
  margin-left:30px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 2px 2px 6px black;
`;

export const CategoryMainP = styled.p`
  text-align: center;
  color: rgba(0, 0, 0, 0.707);
  font-size: 24px;
  font-weight: 500;
  margin-left:10px;
`;



