import { useState } from 'react';

import BoardGroup from '../components/Board/BoardGroup';
import styled from 'styled-components'
import Title from '../components/Title/Title';

function Board() {
  const [boardGroup, SetboardGroup] = useState([{ id: 1 }]);
  

  const addBoardGroup = () => {
    SetboardGroup([...boardGroup, {id: Date.now()}])
  } 

  return <BoardWrapper>
    <Title />
    <BoardSection>
      {boardGroup.map(el => (
        <BoardGroup key={el.id} id={el.id} />
      ))}
      <AddGroupButton onClick={addBoardGroup}>+ Add another group</AddGroupButton>
    </BoardSection>
  </BoardWrapper>;
}

const BoardWrapper = styled.div`
  margin-top: 50px;
  height: 100vh;
  overflow-y:hidden;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colorBackground};
`

const BoardSection = styled.div`
  display: flex;
  gap: 0 20px;
`

const AddGroupButton = styled.button`
align-self: flex-start;
min-width: 290px;
padding: 5px 15px;
background:#E0E0E0;
border-radius: 5px 0px 0px 5px;
font-weight: 700;
color: rgba(0, 0, 0, 0.7);
`

export default Board;
