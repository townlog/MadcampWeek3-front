import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import village from "../../assets/village.png";
import KakaoLogin from "react-kakao-login";
import KakaoImg from "../../assets/kakao_login_medium_narrow.png";
import { login, setAccessTokenToCookie } from "../../api/Auth";
import { getMe } from "../../api/User";
import request from "../../api/axios";

const loginKakao = async (e, navigate) => {
  const accessToken = e.response.access_token;
  const { status, register, token } = await login(e.response.access_token);
  console.log(`token`, accessToken);
  if (status) {
    alert(`로그인 성공 ${token}`);
    request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(token);
    setAccessTokenToCookie(token);
    const {
      user: { nickname },
    } = await getMe();
    alert(`안녕하세요! ${nickname}님!`);
    navigate("/town", { state: { accessToken } });
  } else if (!register) {
    alert("회원가입이 필요합니다");
    navigate("/register", { state: { accessToken } });
  } else {
    alert("로그인에 실패했습니다");
  }
};

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <LoginBackground>
      <KakaoLogin
        token={process.env.REACT_APP_API_KEY}
        render={(renderProps) => (
          <span onClick={renderProps.onClick} style={{ cursor: "pointer" }}>
            <img className="social_login_icon" src={KakaoImg} alt="kakao" />
          </span>
        )}
        onSuccess={(e) => {
          loginKakao(e, navigate);
        }}
        onFail={console.error}
        onLogout={console.info}
      />
    </LoginBackground>
  );
};

const LoginBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${village});
  background-size: cover;
  min-height: 100vh;
`;

export default LoginPage;
