import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import townbackground from "../../assets/townbackground.jpg";

const MapModal = (props) => {
  const { open, close } = props;

  return (
    <div>
      {open ? (
        <section>
          <div>
            <Fullmap>
              <button
                onClick={close}
                style={{
                  position: "absolute",
                  bottom: "10px",
                }}
              >
                close
              </button>
            </Fullmap>
          </div>
        </section>
      ) : null}
    </div>
  );
};

const Fullmap = styled.div`
  display: flex;
  position: relative;
  justify-content: center;

  align-items: center;
  background: url(${townbackground});
  background-size: cover;
  min-height: 50vh;
  min-width: 50vw;
`;

export default MapModal;
