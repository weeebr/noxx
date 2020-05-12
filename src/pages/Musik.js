import React from "react";
import styled from "styled-components";

import SectionTitle from "../page-components/SectionTitle";
import { icons } from "../theme";

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: slategray;
  padding: 20px;
`;

const Musik = () => {
  return (
    <>
      <SectionTitle>Musik</SectionTitle>
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
        <a href="#">
          <img src={icons.spotify} alt="Noxx auf Spotify" />
        </a>
        <a href="#">
          <img src={icons.apple} alt="Noxx auf Apple Music" />
        </a>
        <a href="#">
          <img src={icons.instagram} alt="Noxx auf Instagram" />
        </a>
        <a href="#">
          <img src={icons.youtube} alt="Noxx auf YouTube" />
        </a>
        <a href="#">
          <img src={icons.facebook} alt="Noxx auf FaceBook" />
        </a>
      </IconsWrapper>
    </>
  );
};

export default Musik;
