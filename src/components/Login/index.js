import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import KakaoLogin from "react-kakao-login";
import KakaoImg from "../../assets/kakao_login_medium_narrow.png";

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const loginKakao = (e) => {
  console.log(e.response.access_token);
};

const LoginForm = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <LoginBox>
        <span>Login</span>
        <Form onSubmit={handleSubmit}>
          <Input type="text" value={id} onChange={handleId} />
          <Input type="password" value={pw} onChange={handlePw} />
          <Button type="submit">Submit</Button>
        </Form>
        <KakaoLogin
          token={process.env.REACT_APP_API_KEY}
          render={(renderProps) => (
            <span onClick={renderProps.onClick}>
              <img className="social_login_icon" src={KakaoImg} />
            </span>
          )}
          onSuccess={(e) => {
            loginKakao(e);
          }}
          onFail={console.error}
          onLogout={console.info}
        />
      </LoginBox>
    </>
  );
};

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #f03d4e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

export default LoginForm;
