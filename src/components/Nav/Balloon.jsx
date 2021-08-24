import React from "react";
import styled from "styled-components";

function Balloon() {
  return (
    <BalloonContainer>
      <p>
        <i class="fas fa-folder-plus"></i>
        <span>새로운 보드 만들기</span>
      </p>
    </BalloonContainer>
  );
}
const BalloonContainer = styled.div`
  padding: 20px 15px 20px 15px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: white;
  position: relative;
  width: 250px;
  top: 50px;
  left: calc(100vw - 300px);

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
  }

  i {
    padding-right: 10px;
  }
`;

export default Balloon;
