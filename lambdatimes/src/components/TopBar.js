import React from "react";
import Styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarContainer>
      <InnerContainer>
        <ContainerLeft>
          <SpanLeft>TOPICS</SpanLeft>
          <SpanLeft>SEARCH</SpanLeft>
        </ContainerLeft>
        <ContainerCenter>
          <SpanCenter>GENERAL</SpanCenter>
          <SpanCenter>BROWNBAG</SpanCenter>
          <SpanCenter>RANDOM</SpanCenter>
          <SpanCenter>MUSIC</SpanCenter>
          <SpanCenter>ANNOUNCEMENTS</SpanCenter>
        </ContainerCenter>
        <ContainerRight>
          <SpanRight>LOG IN</SpanRight>
        </ContainerRight>
      </InnerContainer>
    </TopBarContainer>
  );
};

const TopBarContainer = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const InnerContainer = Styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
    }
  }
`;

const ContainerLeft = Styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const SpanLeft = Styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContainerCenter = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const SpanCenter = Styled.span`
  cursor: pointer;
  margin-right: 5%;
  :last-child: {margin-right: 5px;}
  :hover: {text-decoration: underline}
`;

const ContainerRight = Styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const SpanRight = Styled.span`
  cursor: pointer;
  margin-right: 5%;
  font-weight: bold;
`;

export default TopBar;
