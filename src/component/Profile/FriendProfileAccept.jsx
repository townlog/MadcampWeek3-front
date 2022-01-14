import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { acceptFriendRequest } from "../../api/Friend";

const FriendProfileAccept = ({ user }) => {
  const AcceptHandler = async () => {
    const data = await acceptFriendRequest(user.id, true);
  };
  const DeclineHandler = async () => {
    const data = await acceptFriendRequest(user.id, false);
  };
  return (
    <div>
      <div>
        {user.nickname}님의 {user.houseName}
      </div>
      <button onClick={AcceptHandler}>친구 수락</button>
      <button onClick={DeclineHandler}>친구 거절</button>
    </div>
  );
};

export default FriendProfileAccept;
