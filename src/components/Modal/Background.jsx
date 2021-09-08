import React from "react";
import styled from "styled-components";
import { sideBarState } from "../../atoms/navStates";
import { useRecoilState } from "recoil";

function Background({ children }) {
  const [isHidden, setIsHidden] = useRecoilState(sideBarState);

  return (
    <BackgroundBox
      onClick={() => {
        setIsHidden(true);
      }}
    >
      {children}
    </BackgroundBox>
  );
}

const BackgroundBox = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;
export default Background;
