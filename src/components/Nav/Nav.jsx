import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import NavBtn from "../NavBtn/NavBtn";
import SideBar from "./SideBar";
import Balloon from "./Balloon";
import AddBoard from "../Modal/AddBoard";
import {
  sideBarState,
  createNewBoardState,
  newBoardModalState,
} from "../../atoms/navStates";
import { useRecoilState } from "recoil";

function Nav() {
  const history = useHistory();
  const [isHidden, setIsHidden] = useRecoilState(sideBarState);
  const [createNew, setCreateNew] = useRecoilState(createNewBoardState);
  const [boardModal, setBoardModal] = useRecoilState(newBoardModalState);

  return (
    <>
      <NavContainer>
        <TitleContainer>
          <div
            onClick={() => {
              history.push("/");
            }}
          >
            <i className="far fa-calendar" />
            <span>연월일</span>
          </div>
        </TitleContainer>

        <Container>
          <BtnBundle>
            <NavBtn
              onClick={() => {
                history.push("/");
              }}
              label={<i className="fas fa-home" />}
            ></NavBtn>
            <NavBtn
              onClick={() => {
                setIsHidden(!isHidden);
              }}
              label={
                <>
                  <i className="fab fa-flipboard" /> <span>Boards</span>
                </>
              }
            ></NavBtn>
            <Search placeholder="Search" />
          </BtnBundle>
          <BtnBundle>
            <NavBtn
              onClick={() => {
                setCreateNew(!createNew);
              }}
              label={<i className="fas fa-plus" />}
            ></NavBtn>
            <NavBtn
              onClick={() => {
                history.push("/signin");
              }}
              label="Sign in"
            />
          </BtnBundle>
        </Container>
        {!isHidden && <SideBar />}
        {!createNew && <Balloon />}
        {boardModal && <AddBoard />}
      </NavContainer>
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
  z-index: 999;
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

  div {
    cursor: pointer;
  }

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
