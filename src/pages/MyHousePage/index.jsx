import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import room from "../../assets/room.jpg";
import home1 from "../../assets/home1.png";
import FriendHome from "../../component/friendhome.jsx";
import mapicon from "../../assets/map.png";
import friendicon from "../../assets/friendicon.png";
import MapModal from "../../component/Modals/MapModal.jsx";
import FriendModal from "../../component/FriendModal/FriendModal";

const MyHousePage = () => {
  const [FriendmodalOpen, setFriendModalOpen] = useState(false);

  const openFriendModal = () => {
    //TODO: switch modal
    setFriendModalOpen(true);
  };

  const closeFriendModal = () => {
    setFriendModalOpen(false);
  };

  return (
    <RoomBackground>
      <Friend onClick={openFriendModal} style={{ cursor: "pointer" }} />
      <FriendModal
        open={FriendmodalOpen}
        close={closeFriendModal}
      ></FriendModal>
    </RoomBackground>
  );
};

const RoomBackground = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  background: url(${room});
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
`;

const Furniture = styled.div``;

const Friend = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
  top: 10px;
  background-image: url(${friendicon});
  background-repeat: no-repeat;
  background-size: contain;
  height: 15vmin;
  width: 15vmin;
`;
export default MyHousePage;
