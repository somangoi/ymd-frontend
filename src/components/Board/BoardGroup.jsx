import React, { useState } from 'react'
import styled from 'styled-components';
import BoardCard from './BoardCard'
import User from '../User/User'
import InputContainer from './InputContainer';

export default function BoardGroup() {
  // const [boardCard, SetboardCard] = useState([]);
  const [changeInput, setChangeInput] = useState(false)

  // const addBoardCard = () => {
  //   SetboardCard([...boardCard, {id: Date.now()}])
  // } 

  return (
    <BoardListWraper>
      <h2 className="BoardListTitle">
      {
        changeInput ? 
        <input value="title" onBlur={()=> setChangeInput(!changeInput)} /> 
        : <h1 onClick={()=> setChangeInput(!changeInput)}>Title</h1> 
      }
      </h2>
      
      {/* {boardCard.map(el => 
        <BoardCard/> 
        )} */}
        <BoardCard/> 
        <BoardCard/>
        <InputContainer />
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

    input {
      width : 100%;
    }
  }

  button{
    font-size: 16px;
  }
`