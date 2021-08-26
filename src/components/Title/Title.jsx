import React from 'react'
import styled from 'styled-components'
import User from '../User/User'

export default function Title() {
  return (
    <TitleWraper>
      <span>
      <h1>My new Project</h1>
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

    h1{
      margin-left: 10px;
      font-weight: 700;
    }

    span{
      ${({ theme }) => theme.displayFlex('flex-start', 'center')};
      gap: 0 10px;
      margin-bottom: 20px;
    }
`