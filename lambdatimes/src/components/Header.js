import React from "react";
import Styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <HeaderContainer>
      <Date>SMARCH 32, 2018</Date>
      <Title>Lambda Times</Title>
      <Temperature>98°</Temperature>
    </HeaderContainer>
  );
};

const HeaderContainer = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 45px;
  padding-bottom: 14px;
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const Date = Styled.span`
  margin-left: 25px;
  flex: 1;
`;

const Title = Styled.h1`
  font-size; 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const Temperature = Styled.span`
  text-align: right;
  margin-right; 25px;
  flex: 1;
  padding-right: 20px;
`;

export default Header;
