import React from "react";
import styled from "styled-components";
import Background from "../Modal/Background";

function SideBar() {
  const children = (
    <SideBarContainer>
      <BoardBox>
        <h2>
          <i class="far fa-clock" />
          최근 보드
        </h2>
      </BoardBox>
      <BoardBox>
        <h2>
          <i class="fas fa-user" />
          전체 보드
        </h2>
      </BoardBox>
    </SideBarContainer>
  );
  return <Background> {children}</Background>;
}

const SideBarContainer = styled.div`
  width: 330px;
  height: 100%;
  background-color: white;
  position: fixed;
  left: 0;
  top: 50px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
`;

const BoardBox = styled.div`
  padding: 30px;
  h2 {
    font-weight: 600;
  }
  i {
    padding-right: 5px;
  }
`;

export default SideBar;
