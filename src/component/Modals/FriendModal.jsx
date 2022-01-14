import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import townbackground from "../../assets/townbackground.jpg";
import SearchBar from "../Search/SearchBar";

const FriendModal = (props) => {
  const { open, close } = props;

  return (
    <div>
      {open ? (
        <section>
          <div>
            <Modal>
              <SearchBar></SearchBar>
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

export default FriendModal;
