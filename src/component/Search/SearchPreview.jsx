import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const SearchPreview = ({ name, updateText }) => {
  return (
    <div onClick={() => updateText(name)}>
      <div>
        <p> {name}</p>
      </div>
    </div>
  );
};

export default SearchPreview;
