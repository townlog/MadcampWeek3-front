import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { makeFriendRequest } from "../../api/Friend";

const FriendProfileNoAdd = ({ user }) => {
  const navigate = useNavigate();

  const HouseOnClickHandler = async () => {
    navigate("/house", { state: { user } });
  };
  return (
    <div>
      <div>
        {user.nickname}님의 {user.houseName}
      </div>
      <button onClick={HouseOnClickHandler}>방 구경</button>
    </div>
  );
};

export default FriendProfileNoAdd;
