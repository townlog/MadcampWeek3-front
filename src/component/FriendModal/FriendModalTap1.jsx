import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import townbackground from "../../assets/townbackground.jpg";
import SearchBar from "../Search/SearchBar";
import { SearchUser } from "../../api/Friend";
import FriendProfile from "../Profile/FriendProfile";

const FriendModalTap1 = () => {
  const [search, setSearch] = useState(false);
  const [nickname, setNickname] = useState("");

  const [name, setName] = useState("");
  const [frienduser, setfrienduser] = useState("");

  const handleOnChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const onSearchClick = async () => {
    const { status, user } = await SearchUser(name);
    if (status) {
      setSearch(true);
      setfrienduser(user);
      console.log(user);
      console.log(user.houseName);
      setNickname(user.nickname);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={name}
        onChange={handleOnChange}
      />
      <button onClick={onSearchClick}>search</button>
      {search ? (
        <p>
          {" "}
          <FriendProfile
            user={frienduser}
            position="absolute"
            bottom="0"
          ></FriendProfile>
        </p>
      ) : null}
    </div>
  );
};

export default FriendModalTap1;
