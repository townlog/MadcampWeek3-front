import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import townbackground from "../../assets/townbackground.jpg";
import SearchBar from "../Search/SearchBar";
import { SearchUser } from "../../api/Friend";

const FriendModal = (props) => {
  const { open, close } = props;

  const onSubmit = (data) => console.log(data);
  const [name, setName] = useState("");

  const handleOnChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const onSearchClick = async () => {
    const data = await SearchUser(name);
    console.log(data.user.nickname);
    alert(data);
  };

  return (
    <div>
      {open ? (
        <section>
          <div>
            <Modal>
              <input
                type="text"
                placeholder="search"
                value={name}
                onChange={handleOnChange}
              />
              <button onClick={onSearchClick}>search</button>
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
