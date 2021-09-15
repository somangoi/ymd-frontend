import React from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router';
import styled from 'styled-components'

import { POST_GOOGLE_API } from '../config';

export default function Signin() {
  let history = useHistory();

  const responseGoogle = response => {
    console.log(response, 'success');

    fetch(`${POST_GOOGLE_API}`, {
      method: 'POST',
      headers: {
        Authorization: response.tokenId,
      },
    })
      .then(response => response.json())
      .then(response => {
          localStorage.setItem('token', response.tokenId);
      });
      alert('로그인되었습니다.');
      history.push('/');
    
  };

  const failResponseGoogle = response => {
    console.log(response, 'fail');
  };

  return (
    
      <SigninWrapper>
        <LoginForm>
          <h1>회원가입 / 로그인</h1>
          <GoogleLogin
            clientId='547854055873-c7esp5ssqgmg88elo551rs7fa5ur0ffa.apps.googleusercontent.com'
            onSuccess={responseGoogle}
            onFailure={failResponseGoogle}
            cookiePolicy={'single_host_origin'}
            />
        </LoginForm>
      </SigninWrapper>
    
  )
}

const SigninWrapper = styled.div`
  ${({ theme }) => theme.displayFlex('center', 'center')};
  padding-top: 50px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colorBackground};
  
`

const LoginForm =styled.div`
  ${({ theme }) => theme.displayFlex('space-between', 'center')};
    flex-direction: column;
    padding: 120px;
    width:527px;
    height:380px;
    background-color: #FFFFFF;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.13);
    border-radius: 5px;
  
`