import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import village from "../../assets/village.png";
import KakaoLogin from "react-kakao-login";
import KakaoImg from "../../assets/kakao_login_medium_narrow.png";
import { login, setAccessTokenToCookie } from "../../api/Auth";
import { getMe } from "../../api/User";
import request from "../../api/axios";
import { logIn } from "../../actions/authAction";

const loginKakao = async (e, navigate, dispatch) => {
  const accessToken = e.response.access_token;
  const { status, register, token } = await login(e.response.access_token);
  console.log(`token`, accessToken);
  if (status) {
    alert(`로그인 성공 ${token}`);
    request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    setAccessTokenToCookie(token);
    const { user } = await getMe();
    dispatch(logIn(user));
    alert(`안녕하세요! ${user.nickname}님!`);
    navigate("/home", { state: { accessToken } });
    return { loggedIn: true, user };
  } else if (!register) {
    alert("회원가입이 필요합니다");
    navigate("/register", { state: { accessToken } });
    return { loggedIn: false };
  } else {
    alert("로그인에 실패했습니다");
    return { loggedIn: false };
  }
};

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
          loginKakao(e, navigate, dispatch);
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
