import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { makeFriendRequest } from "../../api/Friend";

const FriendProfile = ({ user }) => {
  const navigate = useNavigate();

  const onClickhandler = async () => {
    const data = await makeFriendRequest(user.id);
    console.log(user.id);
    console.log(user.houseName);
    console.log(data.status);
  };

  const HouseOnClickHandler = async () => {
    navigate("/house", { state: { user } });
  };
  return (
    <div>
      <div>
        {user.nickname}님의 {user.houseName}
      </div>
      <button onClick={HouseOnClickHandler}>방 구경</button>
      <button onClick={onClickhandler}>친구 추가</button>
    </div>
  );
};

export default FriendProfile;
