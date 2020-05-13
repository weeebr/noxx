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
import { breakpoint, device } from "./../theme/index";
import Slider from "../page-components/Slider";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const MemberProfiles = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto 0 auto;
  width: 70%;

  ${breakpoint(device.phone)} {
    width: 100%;
    padding: 0 4px;
  }
`;

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

const Home = () => {
  const sliderVisible = useMediaQuery(`(max-width:${device.phone})`);

  return (
    <>
      <h1>NOXX</h1>
      <SectionTitle>Home</SectionTitle>

      <h3>
        Wer sind wir? Eine Band!
        <span role="img" style={{ display: "block" }} aria-label="music-emoijs">
          🥁 🎷🎤 🪕 🎹 🎸
        </span>
      </h3>
      <br />
      <MemberProfiles>
        {true && (
          <>
            {members.map((m, idx) => (
              <Profile m={m} idx={idx} key={m.name} />
            ))}
          </>
        )}

        {false && (
          <Slider
            slides={members}
            SlideComponent={(s, idx) => (
              <Profile m={s} idx={idx} key={s.name} />
            )}
          />
        )}
      </MemberProfiles>
    </>
  );
};

const ProfileWrapper = styled.div`
  margin: 0 4px;
  ${breakpoint(device.phone)} {
    max-width: 20%;
  }

  p {
    margin: 0;
  }

  .member-name {
    margin: 0 0 4px 0;
    font-size: 25px;

    ${breakpoint(device.phone)} {
      font-size: 13px;
      font-family: LatoRegular;
      font-weight: normal;
    }

    font-family: AmaticBold;
    font-weight: 900;
    background: ${(props) =>
      props.name === "Tamino Weggler" ? "#ffbb0e" : "goldenrod"};
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

    ${breakpoint(device.phone)} {
      font-size: 11px;
      font-family: LatoRegular;
    }
  }
`;

const Profile = ({ m, idx }) => {
  console.log({ m, idx });
  return (
    <ProfileWrapper name={m.name} key={idx}>
      <img src={m.img} alt={m.name} />
      <p className="member-name">{m.name}</p>
      <span className="member-emoji" role="img" aria-label="member-emoji">
        {m.emoji}
      </span>
      <p className="member-function">{m.function}</p>
    </ProfileWrapper>
  );
};

export default Home;
