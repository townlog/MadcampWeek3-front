import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { getMyFriends } from "../../api/Friend";
import FriendProfileNoAdd from "../Profile/FriendProfileNoAdd";

const FriendModalTap2 = () => {
  const [FriendList, setFriendList] = useState([]);

  const getFriendList = async () => {
    const { users } = await getMyFriends();
    console.log(users);
    setFriendList(users);
  };

  useEffect(() => {
    getFriendList();
  }, []);

  return (
    <>
      {FriendList.map((e) => (
        <FriendProfileNoAdd user={e} position="absolute" bottom="0" />
      ))}
    </>
  );
};

export default FriendModalTap2;
