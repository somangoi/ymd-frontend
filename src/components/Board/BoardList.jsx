import React, { Fragment } from 'react'
import styled from 'styled-components';
import BoardCard from './BoardCard'


export default function BoardList() {
  return (
    <BoardListWraper>
      {/* title mapping */}
      <h2 className="BoardListTitle">Backlog</h2>
      <BoardCard/>
      <BoardCard/>
      <BoardCard/>
      <BoardCard/>
      <BoardCard/>
      <BoardCard/>
      <BoardCard/>
      <button>+ Add a card</button>
    </BoardListWraper>
  )
}

const BoardListWraper = styled.div`
  width: 290px;
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