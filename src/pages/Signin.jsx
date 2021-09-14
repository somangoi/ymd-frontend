import React, { Fragment, useEffect, useState, useRef } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router';
import styled from 'styled-components'

import { POST_GOOGLE_API } from '../config';

export default function Signin() {
  const history = useHistory();
//   const googleLoginBtn = useRef(null);
//   const [token, setToken] = useState("");

//   useEffect(() => {
//     googleSDK();
//   }, []);


// //SDK 초기 설정 및 내 API초기화
//   const googleSDK = () => {
//     window.googleSDKLoaded = () => {
//       // console.log(window.gapi);
//       window.gapi.load("auth2", () => {
//         const auth2 = window.gapi.auth2.init({
//           client_id:
//             "547854055873-c7esp5ssqgmg88elo551rs7fa5ur0ffa.apps.googleusercontent.com",
//           scope: "profile email",
//         });
//         //버튼 클릭시 사용자 정보 불러오기
//           auth2.attachClickHandler(
//           googleLoginBtn.current,
//           {},
//           (googleUser) => {
//             const profile = googleUser.getBasicProfile();
//             console.log(profile);
//             console.log(`Token || ${googleUser.getAuthResponse().id_token}`);
//             setToken(googleUser.getAuthResponse().id_token);
//             console.log(`ID: ${profile.getId()}`);
//             console.log(`Name: ${profile.getName()}`);
//             console.log(`Image URL: ${profile.getImageUrl()}`);
//             console.log(`Email: ${profile.getEmail()}`);
//           },
//           (error) => {
//             alert(JSON.stringify(error, undefined, 2));
//           }
//         );
//       });
//     };
//    //구글 SDK 불러오기
//       (function (d, s, id) {
//       let js;
//       const fjs = d.getElementsByTagName(s)[0];
//       if (d.getElementById(id)) {
//         return;
//       }
//       js = d.createElement(s);
//       js.id = id;
//       js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
//       fjs.parentNode.insertBefore(js, fjs);
//     })(document, "script", "google-jssdk");
//   };

//   //fetch
//   const loginWithGoogle = (token) => {
//     console.log(token);
//     fetch(`${POST_GOOGLE_API}`, {
//         method: 'POST',
//         headers: {
//          Authorization: token,
//          "Content-Type": "application/json",
//          },
//       })
//       .then((res) => {
//         sessionStorage.setItem("token", res.data.token);
//         alert("로그인 되었습니다");
//         history.push("/");
//       })
//       .catch((error) => alert("Error가 발생하였습니다", error));
//   };

const responseGoogle = response => {
  console.log(response.accessToken, 'success');

  fetch(`${POST_GOOGLE_API}`, {
    method: 'POST',
    headers: {
      Authorization: response.accessToken,
      "Content-Type": "application/json",
    },
  })
  // .then((res) => {
  //   sessionStorage.setItem("token", res.data.token);
  //   alert("로그인 되었습니다");
  //   history.push("/");
  // })
  // .catch((error) => alert("Error가 발생하였습니다", error));
    .then(res => res.json())
    .then(res => {
      if (res.access_token) {
        localStorage.setItem('token', res.access_token);
      }
    });

  history.push('/');
};

const failResponseGoogle = response => {
  console.log(response, 'fail');
};

  return (
    <Fragment>
      <SigninWrapper>
        {/* <div>
          <h1>회원가입 / 로그인</h1>
            <span className="icon"></span>
            <GoogleLoginBtn ref={googleLoginBtn} onClick={loginWithGoogle}/>
        </div> */}
        <GoogleLogin 
          clientId='547854055873-c7esp5ssqgmg88elo551rs7fa5ur0ffa.apps.googleusercontent.com'
          onSuccess={responseGoogle}
          onFailure={failResponseGoogle}
          cookiePolicy={'single_host_origin'}
          />
      </SigninWrapper>
    </Fragment>
  )
}

const SigninWrapper = styled.div`
  ${({ theme }) => theme.displayFlex('center', 'center')};
  margin-top: 50px;
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

const GoogleLoginBtn = styled.button`
  display: inline-block;
  background: white;
  color: #444;
  width: 191px;
  height: 46px;
  border-radius: 5px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;
  background-image: url("../images/btn_google_signin_light_normal_web.png")
`