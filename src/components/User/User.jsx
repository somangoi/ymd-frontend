import React from 'react'
import styled from 'styled-components'

export default function User() {
  return (
    <UserList>
      <li>황</li>
      <li>박</li>
      <li>kim</li>
      {/* 리스트 length 구하기 */}
      <li>+ 2</li>
    </UserList>
  )
}

const UserList = styled.ul`
  display: flex;

  li{
    width: 30px;
    height:30px;
    /* bg 색상 랜덤으로 돌리기 */
    background-color: pink;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
  }
`