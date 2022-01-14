import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { getFriendRequest } from "../../api/Friend";
import FriendProfileAccept from "../Profile/FriendProfileAccept";

const FriendModalTap3 = () => {
  const [requestList, setrequestList] = useState([]);

  const getRequestList = async () => {
    const { pending } = await getFriendRequest();
    setrequestList(pending);
  };

  useEffect(() => {
    getRequestList();
  }, []);

  return (
    <>
      {requestList.map((e) => (
        <FriendProfileAccept
          key={e.id}
          user={e}
          position="absolute"
          bottom="0"
        />
      ))}
    </>
  );
};

export default FriendModalTap3;
