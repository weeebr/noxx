import React, { forwardRef } from "react";
import styled from "styled-components";

// page-components
import SectionTitle from "../page-components/SectionTitle";

// assets
// import marcoFaseth from "../assets/band/marco-faseth.jpg";
// import sonjaKuster from "../assets/band/sonja-kuster.jpg";
import timoGeiser from "../assets/band/timo-geiser.jpg";
// import mauroLessa from "../assets/band/mauro-lessa.jpg";
import marcoFaseth from "../assets/band/marco-faseth.jpg";
import taminoWeggler from "../assets/band/tamino-weggler.jpg";
import tamaraMueller from "../assets/band/tamara-mueller.jpg";
import keithMaguire from "../assets/band/keith-maguire.jpg";
import { breakpoint, device } from "../theme/index";
import Slider from "../page-components/Slider";


const members = [
  // {
  //   name: "Sonja Kuster",
  //   emoji: "🎷🎤",
  //   function: "Sax / Gesang",
  //   img: sonjaKuster,
  // },
  {
    name: "Tamino Weggler",
    emoji: "🎤🪕",
    function: "Gesang / Ukulele",
    img: taminoWeggler,
  },
  {
    name: "Tamara Mueller",
    emoji: "🎹",
    function: "Keyboard",
    img: tamaraMueller,
  },
  { name: "Keith Maguire", emoji: "🎸", function: "Bass", img: keithMaguire },
  { name: "Timo Geiser", emoji: "🎸", function: "Gitarre", img: timoGeiser },
  {
    name: "Marco Faseth",
    emoji: "🥁",
    function: "Schlagzeug",
    img: marcoFaseth,
  },
];


const About = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <SectionTitle id="home">Wer wir sind</SectionTitle>

      <br />
      <MemberProfiles>
        <Slider
          slides={members}
          SlideComponent={(s, idx) => <Profile m={s} idx={idx} key={s.name} />}
        />
      </MemberProfiles>
    </div>
  );
});

const Profile = ({ m, idx }) => {
  return (
    <ProfileWrapper name={m.name} key={idx}>
      <div className="member-info">
        <div className="member-overlay" />
        <div className="img-wrapper">
          <img src={m.img} alt={m.name} />
        </div>
        <p className="member-name">{m.name}</p>
      </div>
      <div>
        <span className="member-emoji" role="img" aria-label="member-emoji">
          {m.emoji}
        </span>
        <p className="member-function">{m.function}</p>
      </div>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled.div`
  margin: 0 10px;
  position: relative;
  cursor: pointer;

  &:hover {
    .member-overlay {
      z-index: 1;
      transition: all 0.8s ease;
    }

    .member-info .member-name {
      font-size: 30px;

      ${breakpoint(device.phone)} {
        font-size: 22px;
      }
    }

    .member-emoji {
      font-size: 24px;
    }

    .member-function {
      font-size: 26px;

      ${breakpoint(device.phone)} {
        font-size: 22px;
      }
    }

    .member-emoji,
    .member-function {
      z-index: 2;
      position: relative;
      color: white;
      transform: translateY(-5px);
    }
  }

  p {
    margin: 0;
  }

  .member-info {
    position: relative;
    display: flex;
    justify-content: center;

    .member-overlay {
      width: 100%;
      top: 0;
      left: 0;
      height: 100%;
      position: absolute;
    }

    .member-name {
      margin: 0 0 4px 0;
      line-height: 28px;
      width: 100%;
      bottom: -32px;
      position: absolute;
      z-index: 3;
      transition: all 0.5s ease;
      font-size: 25px;
      font-family: ShadowsIntoLight;
      font-weight: 900;
      background: ${(props) =>
        props.name === "Tamino Weggler" ? "#b9da78" : "#a5c06e"};
      padding: 6px 10px;

      ${breakpoint(device.phone)} {
        font-size: 13px;
        line-height: 18px;
        font-family: LatoRegular;
        font-weight: normal;
      }
    }
  }

  .member-emoji {
    display: block;
    font-family: ShadowsIntoLight;
    font-size: 20px;
    transform: translateY(0) scale(1);
    transition: all 0.25s ease;
    margin-top: 44px;

    ${breakpoint(device.phone)} {
      letter-spacing: -8px;
      margin-left: -8px;
    }
  }

  .member-function {
    font-size: 22px;
    font-family: ShadowsIntoLight;
    transform: translateY(0) scale(1);
    transition: all 0.25s ease;
    line-height: 1.25;
    white-space: break-spaces;
    word-spacing: 0px;

    ${breakpoint(device.phone)} {
      font-size: 11px;
      font-family: LatoRegular;
    }
  }
`;


const MemberProfiles = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto 0 auto;

  ${breakpoint(device.phone)} {
    width: 100%;
    padding: 0 4px;
  }
`;



export default About;
