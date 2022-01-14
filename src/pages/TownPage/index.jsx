import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import townbackground from "../../assets/townbackground.jpg";
import home1 from "../../assets/home1.png";
import FriendHome from "../../component/friendhome.jsx";
import mapicon from "../../assets/map.png";
import friendicon from "../../assets/friendicon.png";
import MapModal from "../../component/Modals/MapModal.jsx";
import FriendModal from "../../component/Modals/FriendModal";

const TownPage = () => {
  const [MapmodalOpen, setMapModalOpen] = useState(false);
  const [FriendmodalOpen, setFriendModalOpen] = useState(false);

  const openMapModal = () => {
    //TODO: switch modal
    setMapModalOpen(true);
  };

  const closeMapModal = () => {
    setMapModalOpen(false);
  };

  const openFriendModal = () => {
    //TODO: switch modal
    setFriendModalOpen(true);
  };

  const closeFriendModal = () => {
    setFriendModalOpen(false);
  };

  return (
    <TownPageBackground>
      <Homes>
        <FriendHome srcname={home1} />
        <FriendHome srcname={home1} />
        <FriendHome srcname={home1} />
        <FriendHome srcname={home1} />
        <FriendHome srcname={home1} />
      </Homes>
      <Map
        onClick={openMapModal}
        style={{
          cursor: "pointer",
        }}
      />
      <MapModal open={MapmodalOpen} close={closeMapModal}>
        modalmodal
      </MapModal>

      <Friend onClick={openFriendModal} style={{ cursor: "pointer" }} />
      <FriendModal
        open={FriendmodalOpen}
        close={closeFriendModal}
      ></FriendModal>
    </TownPageBackground>
  );
};

const TownPageBackground = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  /* background: url(${townbackground}); */
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
`;

const Homes = styled.div`
  //TODO: add hover
  display: flex;
  position: fixed;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100vw;
  align-self: center;
  background-attachment: fixed;
`;

const Map = styled.div`
  display: flex;
  position: absolute;
  left: 10px;
  top: 10px;
  background-image: url(${mapicon});
  background-repeat: no-repeat;
  background-size: contain;
  height: 15vh;
  width: 15vw;
`;

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
export default TownPage;
