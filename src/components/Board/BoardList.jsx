import React, { useState } from 'react'
import styled from 'styled-components';
import BoardCard from './BoardCard'


export default function BoardList() {
  const [boardCard, SetboardCard] = useState([]);

  const addBoardCard = () => {
    SetboardCard([...boardCard, {id: Date.now()}])
  } 

  return (
    <BoardListWraper>
      <h2 className="BoardListTitle">
        <input placeholder="title"/>
      </h2>
      {boardCard.map(el => 
        <BoardCard/> 
        )}
      <button onClick={addBoardCard}>+ Add a card</button>
    </BoardListWraper>
  )
}

const BoardListWraper = styled.div`
  min-width: 290px;
  height: 100%;
  padding: 10px 15px;
  background: #FFFFFF;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  .BoardListTitle{
    margin-bottom: 15px;
  }

  button{
    font-size: 16px;
  }
`