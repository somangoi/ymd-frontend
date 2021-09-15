import { useState } from 'react'
import styled from 'styled-components'
import User from '../User/User'

export default function BoardCard() {
  return (
    <BoardCardWraper>
      <header>
        <h2>input data(title)</h2>
        <i className="fas fa-copy" />
      </header>
      <section>
      input data(textarea)
      </section>
      <footer>
      <span>생성날짜</span>
      <User/>
      </footer>      
    </BoardCardWraper>
  )
}

const BoardCardWraper = styled.div`
  flex-direction: column;
  position: relative;
  width: 263px;
  min-height: 120px;
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colorBabyBlue};
  border-radius: 5px;

  header{
    ${({ theme }) => theme.displayFlex('space-between', 'center')};
  }

  &:last-child{
    margin-bottom: 0;
  }

  &:hover{
    cursor: pointer;
  }

  input{
    width: 100%;
  }

  footer{
    ${({ theme }) => theme.displayFlex('space-between', 'center')};
    position: absolute;
    bottom: 10px;
  }
`