import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

function Main() {
  return (
    <MainContainer>
      <CardsWrapper>
        <History>
          <h3>
            <i className="far fa-clock" />
            최근 살펴본 보드
          </h3>
          <Cards>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </Cards>
        </History>
        <BoardAll>
          <h3>
            <i className="far fa-clipboard" />
            전체 보드
          </h3>
          <Cards>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </Cards>
        </BoardAll>
      </CardsWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  padding-top: 50px;
  background-color: #f6f6f6;
  min-height: 100vh;
  ${({ theme }) => theme.displayFlex("center", "center")};
`;

const CardsWrapper = styled.div`
  flex-direction: column;
  min-height: 90vh;
  padding: 30px;
  background-color: white;
  width: 95vw;
  margin: 30px 0;
`;

const History = styled.div`
  padding-bottom: 30px;
  h3 {
    font-weight: 500;
  }
  i {
    padding-right: 10px;
  }
`;

const BoardAll = styled.div`
  h3 {
    font-weight: 500;
  }
  i {
    padding-right: 10px;
  }
`;

const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px 0;
`;

const Card = styled.li`
  width: 100%;
  /* height: 200px; */
  height: 0;
  overflow: hidden;
  padding-bottom: 50%;
  background-color: ${({ theme }) => theme.colorBabyBlue};
  border-radius: 10px;
`;

export default Main;
