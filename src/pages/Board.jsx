import { useState } from 'react';

import BoardList from '../components/Board/BoardList';
import styled from 'styled-components'
import Title from '../components/Title/Title';

function Board() {
  const [boardList, SetboardList] = useState([{ id: 1 }]);
  

  const addBoardList = () => {
    SetboardList([...boardList, {id: Date.now()}])
  } 

  return <BoardWrapper>
    <Title />
    <BoardSection>
      {boardList.map(el => (
        <BoardList key={el.id} id={el.id} />
      ))}
      <AddGroupButton onClick={addBoardList}>+ Add another group</AddGroupButton>
    </BoardSection>
  </BoardWrapper>;
}

const BoardWrapper = styled.div`
  height: 100vh;
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
