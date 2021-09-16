import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import MainCard from "../components/Main/MainCard";
import { MAIN_API } from "../config";

function Main() {
  const [pageNum, setPageNum] = useState(1);
  const [starBoard, setStarBoard] = useState();
  const [recentBoard, setRecentBoard] = useState();
  const [boardList, setBoardList] = useState();

  //즐겨찾기 보드 데이터 불러오기
  useEffect(() => {
    fetch(`${MAIN_API}?sort=star&size=999`)
      .then((res) => res.json())
      .then((res) => {
        setStarBoard(res);
      });
  }, []);

  //최근 조회 보드 데이터 불러오기
  useEffect(() => {
    fetch(`${MAIN_API}?sort=recently-viewed&size=3`)
      .then((res) => res.json())
      .then((res) => {
        setRecentBoard(res);
      });
  }, []);

  //전체 보드 데이터 불러오기
  useEffect(() => {
    let currPage = 6 * pageNum;
    fetch(`${MAIN_API}?size=${currPage}`)
      .then((res) => res.json())
      .then((res) => {
        setBoardList(res);
      });
  }, [pageNum]);

  //보드별 멤버 조회
  useEffect(() => {
    let boardId = 1;
    fetch(`${MAIN_API}/${boardId}/members`);
  });

  //더보기 버튼
  const viewMore = () => {
    setPageNum(pageNum + 1);
  };

  return (
    <MainContainer>
      <CardsWrapper>
        <BoardList>
          <h3>
            <i className="far fa-clock" />
            즐겨찾기
          </h3>
          <Cards>
            {starBoard?.results.boards.map((item) => {
              return (
                <MainCard
                  title={item.board_title}
                  id={item.board_id}
                  key={item.board_id}
                />
              );
            })}
          </Cards>
        </BoardList>
        <BoardList>
          <h3>
            <i className="far fa-clock" />
            최근 살펴본 보드
          </h3>
          <Cards>
            {recentBoard?.results.boards.map((item) => {
              return (
                <MainCard
                  title={item.board_title}
                  id={item.board_id}
                  key={item.board_id}
                />
              );
            })}
          </Cards>
        </BoardList>
        <BoardList>
          <h3>
            <i className="far fa-clipboard" />
            전체 보드
          </h3>
          <Cards>
            {boardList?.results.boards.map((item) => {
              return (
                <MainCard
                  title={item.board_title}
                  id={item.board_id}
                  key={item.board_id}
                />
              );
            })}
          </Cards>
          <ViewMore
            onClick={() => {
              viewMore();
            }}
          >
            <div>View all closed boards</div>
          </ViewMore>
        </BoardList>
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

const BoardList = styled.div`
  padding-bottom: 30px;
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

const ViewMore = styled.div`
  ${({ theme }) => theme.displayFlex("flex-end", "center")};
  font-weight: 500;
  cursor: pointer;
`;
export default Main;
