import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import townbackground from "../../assets/townbackground.jpg";
import SearchBar from "../Search/SearchBar";
import { SearchUser } from "../../api/Friend";
import FriendProfile from "../Profile/FriendProfile";
import FriendModalTap1 from "./FriendModalTap1";
import FriendModalTap2 from "./FriendModalTap2";
import FriendModalTap3 from "./FriendModalTap3";
const FriendModal = (props) => {
  const { open, close } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: <li onClick={() => tabClickHandler(0)}> Search </li>,
      tabCont: (
        <div>
          <FriendModalTap1></FriendModalTap1>
        </div>
      ),
    },
    {
      tabTitle: <li onClick={() => tabClickHandler(1)}> FriendList </li>,
      tabCont: (
        <div>
          <FriendModalTap2></FriendModalTap2>
        </div>
      ),
    },
    {
      tabTitle: <li onClick={() => tabClickHandler(2)}> RequestList </li>,
      tabCont: (
        <div>
          <FriendModalTap3></FriendModalTap3>
        </div>
      ),
    },
  ];
  return (
    <div>
      {open ? (
        <section>
          <div>
            <Modal display="flex">
              <div>
                <ul>
                  {tabContArr.map((section, index) => (
                    <div key={index}>{section.tabTitle}</div>
                  ))}
                </ul>
                <div>{tabContArr[activeIndex].tabCont}</div>
              </div>{" "}
              <button
                onClick={close}
                style={{
                  position: "absolute",
                  bottom: "10px",
                  width: "30vmin",
                }}
              >
                close
              </button>
            </Modal>
          </div>
        </section>
      ) : null}
    </div>
  );
};

const Modal = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: white;
  background-size: cover;
  min-height: 80vmin;
  min-width: 50vmin;
  border-width: 1px;
  border: solid;
`;

const Result = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  height: 30vmin;
  width: 30vmin;
`;

export default FriendModal;
