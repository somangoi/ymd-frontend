import React from "react";
import styled from "styled-components";

export const NavBtn = ({ label, ...props }) => {
  return (
    <NavBtnContainer type="button" {...props}>
      {label}
    </NavBtnContainer>
  );
};

const NavBtnContainer = styled.button`
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  min-width: auto;
  height: auto;
  color: white;
  background-color: rgba(255, 255, 255, 0.37);
  line-height: 1;
  font-size: 12px;
  padding: 10px 16px;
  margin-right: 10px;

  &:hover {
    color: #2a5d9b;
    background-color: white;
  }
`;

export default NavBtn;
