import React, { Fragment } from 'react'
import styled from 'styled-components'

export default function Signin() {
  return (
    <Fragment>
      <SigninWrapper>
        <div>
          <h1>회원가입 / 로그인</h1>
          <SigninButton />
        </div>
      </SigninWrapper>
    </Fragment>
  )
}

const SigninWrapper = styled.div`
  ${({ theme }) => theme.displayFlex('center', 'center')};
  height: 100vh;
  background-color: ${({ theme }) => theme.colorBackground};

  div{
    ${({ theme }) => theme.displayFlex('center', 'center')};
    flex-direction: column;
    width:527px;
    height:380px;
    background-color: #FFFFFF;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.13);
    border-radius: 5px;

    h1{
      margin-bottom: 60px;
      font-size:24px;
      
    }
  }
`

const SigninButton = styled.button`
  width: 381px;
  height: 76px;
  border: none;
  background: url(./images/signinGoolge.png) no-repeat center;
  background-size: contain; 
`