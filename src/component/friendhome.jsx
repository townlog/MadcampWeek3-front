import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const getName = () => {
  console.log("hello");
  alert("hello!!");
};

const FriendHome = ({ srcname }) => {
  return (
    <Homename>
      <img
        onClick={getName}
        style={{
          cursor: "pointer",
          width: "40vmin",
          height: "40vmin",
        }}
        className="friend_home"
        src={srcname}
        alt="friendhome"
      />
    </Homename>
  );
};

const Homename = styled.div`
  display: flex;
  position: static;
  justify-content: center;
  align-items: center;
`;

export default FriendHome;
