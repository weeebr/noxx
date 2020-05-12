import React from "react";
import styled from "styled-components";

import SectionTitle from "../page-components/SectionTitle";
import YoutubePreview from "../page-components/YoutubePreview";

import { icons } from "../theme";

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px;

  a img {
    background: slategray;
    border-radius: 50%;
    border: 4px solid slategray;

    &:hover {
      background: #282936;
      border: 4px solid #282936;
    }
  }
`;

const YoutubeWrapper = styled.div`
  display: flex;

  & > div {
    padding: 0 4px;
  }
`;

const Musik = ({ openVideo }) => {
  return (
    <>
      <SectionTitle>Musik</SectionTitle>

      <YoutubeWrapper>
        <YoutubePreview
          openVideo={openVideo}
          id="3K86RRajPEM"
          title="3K86RRajPEM"
        />
        <YoutubePreview
          openVideo={openVideo}
          id="U27b2SqZNH4"
          title="U27b2SqZNH4"
        />
        <YoutubePreview
          openVideo={openVideo}
          id="cV3NnsfpA1Q"
          title="cV3NnsfpA1Q"
        />
      </YoutubeWrapper>
      <h3>Konzerte</h3>
      <p>
        Aufgrund der aktuellen Lage ist noch nicht klar, ab wann wir Konzerte
        spielen können.
      </p>
      <p>
        Doch: Warum stöberst du derweil nicht bisschen in unserem Online-Kram
        rum? Und natürlich wie immer: Vergiss nicht, uns zu folgen, liken und
        subscriben! Wir freuen uns um jeden neuen Follower und Neugierigen :-)
      </p>
      <IconsWrapper>
        <a href="https://open.spotify.com/artist/70VQtiINNxQ15JdP2NDaZP">
          <img src={icons.spotify} alt="Noxx auf Spotify" />
        </a>
        <a href="https://music.apple.com/gb/artist/noxx/257548101">
          <img src={icons.apple} alt="Noxx auf Apple Music" />
        </a>
        <a href="https://www.instagram.com/noxx_musik/">
          <img src={icons.instagram} alt="Noxx auf Instagram" />
        </a>
        <a href="https://www.youtube.com/channel/UCpIAxLIZTRmhOxDxetoKbqw">
          <img src={icons.youtube} alt="Noxx auf YouTube" />
        </a>
        <a href="https://www.facebook.com/NOXXMusik/">
          <img src={icons.facebook} alt="Noxx auf FaceBook" />
        </a>
      </IconsWrapper>
    </>
  );
};

export default Musik;
