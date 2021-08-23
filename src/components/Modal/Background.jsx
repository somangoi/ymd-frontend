import React from "react";
import styled from "styled-components";

function Background({ children }) {
  return <BackgroundBox>{children}</BackgroundBox>;
}

const BackgroundBox = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  padding-top: 50px;
`;
export default Background;
