 import React, { useState } from 'react'
import styled from 'styled-components'
import User from '../User/User'

export default function Title() {
  const [changeInput, setChangeInput] = useState(false)
  return (
    <TitleWraper>
      <span>
      {
        changeInput ? <input value="Todo" onBlur={()=> setChangeInput(!changeInput)} /> : <h1 onClick={()=> setChangeInput(!changeInput)}>Todo</h1> 
      }
      <User />
      </span>
      <select>
        <option>icon/Board</option>
        <option>icon/Task</option>
        <option>icon/Calendar</option>
      </select>
    </TitleWraper>
  )
}

const TitleWraper = styled.header`
    ${({ theme }) => theme.displayFlex('space-between', 'center')};

    span{
      ${({ theme }) => theme.displayFlex('flex-start', 'center')};
      gap: 0 10px;
      margin-bottom: 20px;

      input {
        font-weight: 700;
      }

      h1{
      margin-left: 10px;
      font-weight: 700;
      }
    }
`