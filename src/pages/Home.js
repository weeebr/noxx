import React from "react";
import styled from "styled-components";

// page-components
import SectionTitle from "../page-components/SectionTitle";

// assets
import marcoFaseth from "../assets/band/marco-faseth.webp";
import sonjaKuster from "../assets/band/sonja-kuster.webp";
import taminoWeggler from "../assets/band/tamino-weggler.webp";
import tamaraMueller from "../assets/band/tamara-mueller.webp";
import keithMaguire from "../assets/band/keith-maguire.webp";

const memberWrapperStyles = {
  display: "flex",
  justifyContent: "space-between",
  margin: "30px -2px 0 -2px",
};

const members = [
  {
    name: "Marco Faseth",
    emoji: "🥁",
    function: "Schlagzeug",
    img: marcoFaseth,
  },
  {
    name: "Sonja Kuster",
    emoji: "🎷🎤",
    function: "Sax/Gesang",
    img: sonjaKuster,
  },
  {
    name: "Tamino Weggler",
    emoji: "🎤🪕",
    function: "Gesang/Ukulele",
    img: taminoWeggler,
  },
  {
    name: "Tamara Müller",
    emoji: "🎹",
    function: "Keyboard",
    img: tamaraMueller,
  },
  { name: "Keith Maguire", emoji: "🎸", function: "Bass", img: keithMaguire },
];

const MemberProfile = styled.div`
  margin: 0 2px;

  p {
    margin: 0;
  }

  .member-name {
    margin: 0 0 4px 0;
    font-size: 25px;
    font-family: AmaticBold;
    font-weight: 900;
    background: goldenrod;
    padding: 0 6px;
  }

  .member-emoji {
    display: block;
    font-family: AmaticBold;
    font-size: 20px;
  }

  .member-function {
    font-size: 22px;
    font-family: AmaticBold;
  }
`;

const Home = ({ openVideo }) => {
  return (
    <>
      <SectionTitle>Home</SectionTitle>
      <h1>NOXX</h1>
      <h3>
        Wer sind wir? Eine Band!
        <span role="img" style={{ display: "block" }} aria-label="music-emoijs">
          🥁🎷🎤🪕🎹🎸
        </span>
      </h3>
      <div style={memberWrapperStyles}>
        {members.map((m, idx) => (
          <MemberProfile key={idx}>
            <img src={m.img} alt={m.name} />
            <p className="member-name">{m.name}</p>
            <span className="member-emoji" role="img" aria-label="member-emoji">
              {m.emoji}
            </span>
            <p className="member-function">{m.function}</p>
          </MemberProfile>
        ))}
      </div>
    </>
  );
};

export default Home;
