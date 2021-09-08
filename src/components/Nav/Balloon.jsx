import React from "react";
import styled from "styled-components";
import { sideBarState, createNewBoardState } from "../../atoms/navStates";
import { useRecoilState } from "recoil";

function Balloon() {
  const [createNew, setCreateNew] = useRecoilState(createNewBoardState);

  return (
    <BalloonBackground
      onClick={() => {
        setCreateNew(true);
      }}
    >
      <BalloonContainer onClick={(e) => e.stopPropagation()}>
        <p>
<<<<<<< HEAD
          <i class="fas fa-folder-plus"></i>
=======
          <i className="fas fa-folder-plus" />
>>>>>>> 1195139 (WIP)
          <span>새로운 보드 만들기</span>
        </p>
      </BalloonContainer>
    </BalloonBackground>
  );
}

const BalloonBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  min-height: 100vh;
  height: 100%;
`;

const BalloonContainer = styled.div`
  padding: 20px 15px 20px 15px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: white;
  position: fixed;
  width: 250px;
  top: 50px;
  left: calc(100vw - 300px);
  z-index: 9999;

  &:after {
    border-top: 0px solid transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid white;
    content: "";
    position: absolute;
    top: -8px;
    left: 183px;
  }

  p {
    font-size: 15px;
    text-align: center;
    cursor: pointer;
  }

  i {
    padding-right: 10px;
  }
`;

export default Balloon;
