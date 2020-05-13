import React from "react";
import styled from "styled-components";

import yt3K86RRajPEM from "../assets/youtube/3K86RRajPEM.jpg";
import ytU27b2SqZNH4 from "../assets/youtube/U27b2SqZNH4.jpg";
import ytcV3NnsfpA1Q from "../assets/youtube/cV3NnsfpA1Q.jpg";

const thumbnails = {
  id3K86RRajPEM: yt3K86RRajPEM,
  idU27b2SqZNH4: ytU27b2SqZNH4,
  idcV3NnsfpA1Q: ytcV3NnsfpA1Q,
};

const PlayButton = styled.button`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 68px;
  height: 48px;
  margin-left: -34px;
  margin-top: -24px;
  transition: opacity 0.25s cubic-bezier(0, 0, 0.2, 1);
  z-index: 63;
  pointer-events: none;
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  color: inherit;
  text-align: inherit;
  font-size: 100%;
  font-family: inherit;
  line-height: inherit;

  svg {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    pointer-events: none;

    path:not(.bg) {
      transition: fill 0.1s cubic-bezier(0.4, 0, 1, 1),
        fill-opacity 0.1s cubic-bezier(0.4, 0, 1, 1);
      fill: #212121;
      fill-opacity: 0.8;
    }
  }
`;

const Video = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    svg {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;

      path:not(.bg) {
        transition: fill 0.1s cubic-bezier(0, 0, 0.2, 1),
          fill-opacity 0.1s cubic-bezier(0, 0, 0.2, 1);
        fill: #f00;
        fill-opacity: 1;
      }
    }
  }
`;

const YoutubePreview = ({ openVideo, id, title }) => {
  return (
    <Video>
      <img
        src={thumbnails[`id${id}`]}
        alt={title}
        onClick={() => openVideo(id)}
      />
      <PlayButton aria-label="Wiedergabe">
        <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
          <path
            d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
            fill="#212121"
            fillOpacity="0.8"
          ></path>
          <path className="bg" d="M 45,24 27,14 27,34" fill="#fff"></path>
        </svg>
      </PlayButton>
    </Video>
  );
};

export default YoutubePreview;
