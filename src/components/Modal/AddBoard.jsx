import React from "react";
import Background from "./Background";
import styled from "styled-components";
import { newBoardModalState } from "../../atoms/navStates";
import { useRecoilState } from "recoil";

function AddBoard() {
  const [boardModal, setBoardModal] = useRecoilState(newBoardModalState);

  const children = (
    <Container
      onClick={() => {
        setBoardModal(false);
      }}
    >
      <AddBoardContainer onClick={(e) => e.stopPropagation()}>
        <AddBoardBox>
          <TitleInput placeholder="Add board title"></TitleInput>
          <ButtonBox>
            <CreateButton>Create</CreateButton>
          </ButtonBox>
        </AddBoardBox>
      </AddBoardContainer>
    </Container>
  );
  return <Background>{children}</Background>;
}

const Container = styled.div`
  ${({ theme }) => theme.displayFlex("center", "center")};
  width: 100%;
  height: 100%;
`;

const AddBoardContainer = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
`;

const AddBoardBox = styled.div`
  padding: 30px 35px;
`;

const TitleInput = styled.input`
  width: 250px;
  margin-bottom: 20px;
  border: #e0e0e0 1px solid;
  border-radius: 5px;
  padding: 8px 15px;
`;

const ButtonBox = styled.div`
  ${({ theme }) => theme.displayFlex("flex-end", "center")};
`;

const CreateButton = styled.button`
  background: ${({ theme }) => theme.colorDarkBlue};
  color: white;
  padding: 8px 10px;
  border-radius: 15px;
`;
export default AddBoard;
