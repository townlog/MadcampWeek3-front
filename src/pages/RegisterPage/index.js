import React from "react";
import { useLocation } from "react-router-dom";
import { registerUser } from "../../api/Register";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const RegisterPage = () => {
  const location = useLocation();
  const accessToken = location.state?.accessToken;
  const { register, handleSubmit } = useForm();

  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        console.log(`data`, { ...data, accessToken });
        await registerUser({ ...data, accessToken });
        alert("회원가입이 완료되었습니다!");
      })}
    >
      <Input
        {...register("nickname", { required: true, minLength: 2 })}
        placeholder="닉네임"
      />
      <Input
        {...register("houseName", { required: true, minLength: 1 })}
        placeholder="내 집 이름"
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
};
const Form = styled.form`
  margin: 0 auto;
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
    animation: 0.2s ease-out forwards;
  }
`;

export default RegisterPage;
