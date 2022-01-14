import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import SearchPreview from "./SearchPreview";

const SearchBar = ({ result, updateField, keyword }) => {
  return (
    <div>
      <input
        placeholder="Search"
        value={keyword}
        onChange={(e) => updateField("keyword", e.target.value)}
      ></input>
      <SearchPreview name={name} updateText={updateText}></SearchPreview>
    </div>
  );
};

export default SearchBar;
