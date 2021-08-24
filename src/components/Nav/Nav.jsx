import React from "react";
import styled from "styled-components";
import NavBtn from "../NavBtn/NavBtn";
import SideBar from "./SideBar";
import Balloon from "./Balloon";

function Nav() {
  return (
    <>
      <NavContainer>
        <TitleContainer>
          <i class="far fa-calendar" />
          <span>연월일</span>
        </TitleContainer>

        <Container>
          <BtnBundle>
            <NavBtn label={<i class="fas fa-home" />}></NavBtn>
            <NavBtn
              label={
                <>
                  <i class="fab fa-flipboard" /> <span>Boards</span>
                </>
              }
            ></NavBtn>
            <Search placeholder="Search" />
          </BtnBundle>
          <BtnBundle>
            <NavBtn label={<i class="fas fa-plus"></i>}></NavBtn>
            <NavBtn label={"Sign in"} />
          </BtnBundle>
        </Container>
      </NavContainer>
      <SideBar />
      <Balloon />
    </>
  );
}

const NavContainer = styled.div`
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(0.25turn, #2a5d9b, #498abb);
`;

const BtnBundle = styled.div`
  &:first-child {
    margin-left: 10px;
  }
  z-index: 999;
`;

const Container = styled.div`
  ${({ theme }) => theme.displayFlex("space-between", "center")};
  height: 100%;
`;

const TitleContainer = styled.div`
  ${({ theme }) => theme.displayFlex("center", "center")};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: 50px;
  color: white;
  /* z-index: 1; */

  span {
    padding-left: 10px;
  }
`;

const Search = styled.input`
  border: 0;
  border-radius: 3em;
  min-width: auto;
  height: auto;
  color: black;
  background-color: rgba(255, 255, 255, 0.37);
  line-height: 1;
  font-size: 12px;
  padding: 10px 16px;

  &::placeholder {
    color: white;
  }

  &:focus {
    outline: none;
  }
`;

export default Nav;
